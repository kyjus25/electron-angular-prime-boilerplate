import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Subject} from 'rxjs/Subject';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  public data;
  public dataReturn = [];
  private statsSubject: Subject<any>;

  constructor(public appComponent: AppComponent) {
    this.data = {
      datasets: [{
        data: [
          11,
          16,
          7,
          3,
          14
        ],
        backgroundColor: [
          '#FF6384',
          '#4BC0C0',
          '#FFCE56',
          '#E7E9ED',
          '#36A2EB'
        ],
        label: 'My dataset'
      }],
      labels: [
        'Red',
        'Green',
        'Yellow',
        'Grey',
        'Blue'
      ]
    }
  }

  ngOnInit() {
    /*
    this.appComponent.getPokemonData().subscribe(res => {
      this.stats = this.calculateTypes(res);
    });
    */
  }

  /*
  calculateTypes(statsObject) {
    this.statsReturn = [];
    statsObject.stats.forEach(type => {
      this.statsReturn.push(type.type.name);
    });
    return this.statsReturn;
  }
  */

  httpGet(theUrl) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open( 'GET', theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
  }

}
