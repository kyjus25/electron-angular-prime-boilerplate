import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: MenuItem[];
  pokemons = JSON.parse( this.httpGet('https://pokeapi.co/api/v2/pokemon/') ).results;
  filteredPokemons: any[];
  pokemon: string[];

  showStats = true;
  showMoves = false;
  showEncounters = false;
  showGames = false;
  showAbilities = false;
  showGallery = false;

  ngOnInit() {
    this.items = [
      {label: 'Stats', icon: 'fa fa-chart-bar', styleClass: 'active', command: (event) => {
        this.menuClicked(event);
      }},
      {label: 'Moves', icon: 'fa fa-gavel', command: (event) => {
        this.menuClicked(event);
      }},
      {label: 'Encounters', icon: 'fa fa-map', command: (event) => {
        this.menuClicked(event);
      }},
      {label: 'Games', icon: 'fa fa-gamepad', command: (event) => {
        this.menuClicked(event);
      }},
      {label: 'Abilities', icon: 'fa fa-list', command: (event) => {
        this.menuClicked(event);
      }},
      {label: 'Gallery', icon: 'fa fa-camera', command: (event) => {
        this.menuClicked(event);
      }}
    ];
  }

  menuClicked(event) {
    console.log(event);
    this.items.forEach(menuItem => {
      menuItem.styleClass = null;
    });
    event.item.styleClass = 'active';

    this.showStats = false;
    this.showMoves = false;
    this.showEncounters = false;
    this.showGames = false;
    this.showAbilities = false;
    this.showGallery = false;

    switch (event.item.label) {
      case 'Stats':
        this.showStats = true;
        break;
      case 'Moves':
        this.showMoves = true;
        break;
      case 'Encounters':
        this.showEncounters = true;
        break;
      case 'Games':
        this.showGames = true;
        break;
      case 'Abilities':
        this.showAbilities = true;
        break;
      case 'Gallery':
        this.showGallery = true;
        break;
      default:
        break;
    }

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
