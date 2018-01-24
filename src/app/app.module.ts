import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

//Project module and components
import { AppComponent } from './app.component';
import {DataService} from './data.service';
import { AsyncAwareButton } from './async-aware-button';
import {Alert} from "./alert.component";
import {WordListComponent} from "./components/word-list/word-list.component";
import {InputComponent} from "./components/input/input.component";
import {VocabularyTestComponent} from "./components/vocabulary-test/vocabulary-test.component";
import {MainComponent} from "./components/main/main.component";

//Third party library imports
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

const routes: Routes = [ 
    {path: '', component: MainComponent},
    {path: 'test', component: VocabularyTestComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    AsyncAwareButton,
    Alert,  
    WordListComponent, 
    InputComponent,
    VocabularyTestComponent,
    MainComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule, 
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  entryComponents: [Alert, WordListComponent, InputComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
