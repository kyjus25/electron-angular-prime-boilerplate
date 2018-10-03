import {Component, Input, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {

  public types = [];
  public typesReturn = [];
  private typesSubject: Subject<any>;

  constructor(public appComponent: AppComponent) {}

  ngOnInit() {
    this.appComponent.getPokemonData().subscribe(res => {
      this.types = this.calculateTypes(res);
    });
  }

  calculateTypes(typesObject) {
    this.typesReturn = [];
    typesObject.types.forEach(type => {
      this.typesReturn.push(type.type.name);
    });
    return this.typesReturn;
  }

  httpGet(theUrl) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open( 'GET', theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
  }

}
