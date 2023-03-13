import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog'


@Component({
  selector: 'app-abilitiessearchdetails',
  templateUrl: './abilitiessearchdetails.component.html',
  styleUrls: ['./abilitiessearchdetails.component.css']
})
export class AbilitiessearchdetailsComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any) {}

  ablitiesdetails: any = [];
  pokemons: string = '';

  ngOnInit(){ 
    this.ablitiesdetails = this.dialogData.ablitiesdetails;
    console.log(this.ablitiesdetails);   
    this.pokemons = this.ablitiesdetails.pokemon.map((p: { pokemon: { name: any; }; }) => p.pokemon.name).join(', '); 
  }
  
}
