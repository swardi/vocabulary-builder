import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Http, HttpModule, RequestOptions, XHRBackend } from '@angular/http';

import { AppComponent } from './app.component';
import {DataService} from './data.service';
import { AsyncAwareButton } from './async-aware-button';
import {Alert} from "./alert.component";
import {WordListComponent} from "./components/word-list/word-list.component";
import {InputComponent} from "./components/input/input.component";

//Third party library imports
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'



@NgModule({
  declarations: [
    AppComponent,
    AsyncAwareButton,
    Alert,  WordListComponent, InputComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, ReactiveFormsModule, NgbModule.forRoot()
  ],
  providers: [DataService],
  entryComponents: [Alert, WordListComponent, InputComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
