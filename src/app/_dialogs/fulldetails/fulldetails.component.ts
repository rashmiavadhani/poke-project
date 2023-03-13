import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-fulldetails',
  templateUrl: './fulldetails.component.html',
  styleUrls: ['./fulldetails.component.css']
})
export class FulldetailsComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any) {}
  
  abilities: string = '';
  gameIndices: string = '';
  moves: string = '';
  stats: string = '';
  types: string = '';

  pokemondetails: any = []

  ngOnInit(){ 
    this.pokemondetails = this.dialogData.pokemondetails;
    console.log(this.pokemondetails);
    this.getOtherdetails()
  }

  getOtherdetails(){
    this.abilities = this.pokemondetails.details.abilities.map((p: { ability: { name: any; }; }) => p.ability.name).join(', ');
    this.gameIndices = this.pokemondetails.details.game_indices.map((p: { game_index: { number: any; }; }) => p.game_index).join(', ');
    this.moves = this.pokemondetails.details.moves.map((p: { move: { name: any; }; }) => p.move.name).join(', ');
    this.stats = this.pokemondetails.details.stats.map((p: { base_stat: { number: any; }; }) => p.base_stat).join(', ');
    this.types = this.pokemondetails.details.types.map((p: { type: { name: any; }; }) => p.type.name).join(', ');
  }

}
