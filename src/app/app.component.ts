import { Component } from '@angular/core';
import {DataService} from "./data.service";
import {Alert} from "./alert.component";
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  	constructor(private dataService: DataService,  private fb: FormBuilder, private modalService: NgbModal) {
  		
  	}

    ngOnInit() {
	}


}
