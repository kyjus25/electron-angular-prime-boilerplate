import {Component, Input, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  public description = '';
  public weight = '';
  public height = '';
  private descriptionSubject: Subject<any>;

  constructor(public appComponent: AppComponent) {}

  ngOnInit() {
    this.appComponent.getPokemonData().subscribe(res => {
      this.description = this.calculateDescription(res);
      this.weight = this.calculateMeasurements(res, 'weight');
      this.height = this.calculateMeasurements(res, 'height');
    });
  }

  calculateDescription(descriptionObject) {
    let descriptionReturn = '';
    const descriptionCapture = [];
    // console.log(descriptionObject.species.url);
    const descriptionData = JSON.parse( this.httpGet(descriptionObject.species.url) );
    descriptionData.flavor_text_entries.forEach(desc => {
      if (desc.language.name === 'en') {
        descriptionCapture.push(desc.flavor_text);
      }
    });
    descriptionReturn = descriptionCapture[ Math.floor(Math.random() * descriptionCapture.length + 1) ];
    // console.log(descriptionCapture);
    //console.log(this.descriptionReturn);
    /*descriptionObject.description.forEach(type => {
      this.descriptionReturn.push(type.type.name);
    });
    */
    if (descriptionReturn === undefined) {
      descriptionReturn = 'No description available for this Pokémon.';
    }
    return descriptionReturn;
  }

  calculateMeasurements(measurementObject, value) {
    let measurementsReturn = [];
    let weight = '';
    let height = '';
    weight = measurementObject.weight + 'lbs';
    height = measurementObject.height + 'in';
    console.log(measurementsReturn);
    if (weight.length === 0) {
      weight = 'No weight available for this Pokémon.';
    }
    if (height.length === 0) {
      height = 'No height available for this Pokémon.';
    }
    if (value == 'weight') {
      console.log(weight);
      return weight;
    }
    if (value == 'height') {
      console.log(height);
      return height;
    }


  }

  httpGet(theUrl) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open( 'GET', theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
  }

}
