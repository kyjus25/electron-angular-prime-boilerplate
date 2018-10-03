import { BrowserModule } from '@angular/platform-browser';
import {ChangeDetectorRef, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {AutoCompleteModule} from 'primeng/autocomplete';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { TypesComponent } from './types.component';

@NgModule({
  declarations: [
    TypesComponent,
  ],
  imports: [
    MenuModule,
    AutoCompleteModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: []
})
export class TypesModule { }
