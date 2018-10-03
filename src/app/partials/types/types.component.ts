import {Component} from '@angular/core';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent {

  public types = ['hello', 'world'];

  generateTypes(pokemonData) {
    pokemonData.types.forEach(type => {
      this.types.push(type.type.name);
    });
    console.log(this.types);
  }

  httpGet(theUrl) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open( 'GET', theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
  }

}
