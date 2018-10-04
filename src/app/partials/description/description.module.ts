import { BrowserModule } from '@angular/platform-browser';
import {ChangeDetectorRef, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {AutoCompleteModule} from 'primeng/autocomplete';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { DescriptionComponent } from './description.component';

@NgModule({
  declarations: [
    DescriptionComponent,
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
export class DescriptionModule { }
