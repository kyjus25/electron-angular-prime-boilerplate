import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {AutoCompleteModule} from 'primeng/autocomplete';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {AbilitiesModule} from './abilities/abilities.module';
import {StatsModule} from './stats/stats.module';
import {StatsComponent} from './stats/stats.component';
import {AbilitiesComponent} from './abilities/abilities.component';

@NgModule({
  declarations: [
    AppComponent,
    StatsComponent,
    AbilitiesComponent
  ],
  imports: [
    MenuModule,
    AutoCompleteModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    StatsModule,
    AbilitiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
