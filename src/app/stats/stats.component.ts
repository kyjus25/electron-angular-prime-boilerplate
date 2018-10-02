import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  items: MenuItem[];
  pokemons = JSON.parse( this.httpGet('https://pokeapi.co/api/v2/pokemon/') ).results;
  filteredPokemons: any[];
  pokemon: string[];

  ngOnInit() {
    this.items = [
      {label: 'Stats', icon: 'fa fa-chart-bar', routerLink: 'stats'},
      {label: 'Moves', icon: 'fa fa-gavel', routerLink: 'moves'},
      {label: 'Encounters', icon: 'fa fa-map', routerLink: 'encounters'},
      {label: 'Games', icon: 'fa fa-gamepad', routerLink: 'games'},
      {label: 'Abilities', icon: 'fa fa-list', routerLink: 'abilities'},
      {label: 'Gallery', icon: 'fa fa-camera', routerLink: 'gallery'}
    ];
  }

  menuClicked(event) {
    console.log(event);
  }

  filterPokemons(event) {
    this.filteredPokemons = [];
    for (let i = 0; i < this.pokemons.length; i++) {
      const pokemon = this.pokemons[i];
      if (!pokemon.name.includes('-') ) {
        if (pokemon.name.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
          pokemon.id = i + 1;
          pokemon.upperName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.substr(1);
          this.filteredPokemons.push(pokemon);
        }
      }
    }
  }

  httpGet(theUrl) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open( 'GET', theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
  }

}
