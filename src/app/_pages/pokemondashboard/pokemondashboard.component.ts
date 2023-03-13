import { Component, OnInit } from '@angular/core';
import { PokemonClient } from 'pokenode-ts';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/_services/api.service';
import * as _ from 'lodash';
import { MatDialog } from '@angular/material/dialog';
import { FulldetailsComponent } from '../../_dialogs/fulldetails/fulldetails.component';
import { AbilitiessearchdetailsComponent } from '../../_dialogs/abilitiessearchdetails/abilitiessearchdetails.component';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';


@Component({
  selector: 'app-pokemondashboard',
  templateUrl: './pokemondashboard.component.html',
  styleUrls: ['./pokemondashboard.component.css']
})
export class PokemondashboardComponent implements OnInit {

  constructor(public http: HttpClient, public apiservice: ApiService, public dialog: MatDialog, private snackBar: MatSnackBar) {}

  offset: number = 0;
  limit: number = 20;
  pokemonList: any = [];
  totlalist: any = []; 
  pageSizeOptions = [10, 20, 30, 40];
  totalLength: number | undefined
  dominitialize: boolean = false;
  valueOption: any = ['Name', 'Height', 'Weight'];
  sort: string = '';
  itemOption: any = ['Name', 'Abilities'];
  searchData: any = {}
  namesearchresult: any = [];  

  ngOnInit(){ 
    this.dominitialize = false;    
    this.getpokemonData(this.offset, this.limit);   
  }

  getpokemonData(offset: number, limit: number){
    this.totlalist = [];
    (async () => {
      const api = new PokemonClient();    
      await api
        .listPokemons(offset, limit)
        .then(async (data) => {
          this.totlalist.push(data);
          console.log(this.totlalist);
          this.pokemonList = this.totlalist[0].results;
          for (let item of this.pokemonList){
            await this.apiservice.getpokemondetails(item.url).subscribe( result =>{
              item.details = result;
            })
          }
          this.totalLength = this.totlalist[0].count;
          console.log(this.pokemonList); 
          this.dominitialize = true;  
        }) 
        .catch((error) => console.error(error));
    }) (); 
     
  }  

  onPaginationChange(event: any){ 
    this.searchData.searchBy = '';
    this.sort = '';
    this.searchData.searchParameter = '';
    if(this.limit === event.pageSize){
      if(event.previousPageIndex < event.pageIndex){
        this.offset = this.offset+event.pageSize
        this.limit = event.pageSize
        this.getpokemonData(this.offset, this.limit);  
      }
      else {
        this.offset = this.offset-event.pageSize
        this.limit = event.pageSize
        this.getpokemonData(this.offset, this.limit); 
      }
    } 
    else {
      this.offset = 0
      this.limit = event.pageSize
      this.getpokemonData(this.offset, this.limit);
    }
  }

  sortBy(value: string){    
    if(value == 'Name'){
      this.pokemonList = _.sortBy(this.pokemonList, [function(o) { return o.name; }]);
    }
    else if(value == 'Height'){
      this.pokemonList = _.sortBy(this.pokemonList, [function(o) { return o.details.height; }]);
    }
    else if(value == 'Weight'){
      this.pokemonList = _.sortBy(this.pokemonList, [function(o) { return o.details.weight; }]);
    }
  }

  openDetails(pokemondetails: any){
    const dialogRef = this.dialog.open(FulldetailsComponent, {
      height: '70vh',
      width: '60vw',
      data: {pokemondetails: pokemondetails}
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }

  searchSubmit(){
    console.log(this.searchData);
    this.searchData.searchParameter = this.searchData.searchParameter.toLowerCase();
    if(this.searchData.searchBy === 'Name'){
      (async () => {
        const api = new PokemonClient();      
        await api
          .getPokemonByName(this.searchData.searchParameter)
          .then(async (data) => {
            this.namesearchresult.details = data;
            this.namesearchresult.name = this.searchData.searchParameter;
            this.dialog.open(FulldetailsComponent, {
              height: '70vh',
              width: '60vw',
              data: {pokemondetails: this.namesearchresult}
            });
          })
          .catch((error) => {
            console.log(error) 
            this.snackBar.open('Not Found', '',{
              horizontalPosition: 'center',
              verticalPosition: 'bottom',
              duration: 3000
            });           
          });
      })();      
    }
    if(this.searchData.searchBy === 'Abilities'){
      (async () => {
        const api = new PokemonClient();      
        await api
          .getAbilityByName(this.searchData.searchParameter)
          .then(async (data) => {                       
            this.dialog.open(AbilitiessearchdetailsComponent, {
              height: '40vh',
              width: '60vw',
              data: {ablitiesdetails: data}
            });
          })
          .catch((error) => {
            console.log(error)
            this.snackBar.open('Not Found', '',{
              horizontalPosition: 'center',
              verticalPosition: 'bottom',
              duration: 3000
            });             
          });
      })();
    }
  }

}

