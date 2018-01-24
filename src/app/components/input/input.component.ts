import { Component } from '@angular/core';
import {DataService} from "../../data.service";
import {Alert} from "../../alert.component";
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector:'WordInput',
  templateUrl: './input.component.html',
  //styleUrls: ['./app.component.css']
})

export class InputComponent {
	inputForm : FormGroup;
	word : string = "";
	meaning : string = "";

  	constructor(private dataService: DataService, private modalService: NgbModal) {

  	}

    ngOnInit() {
        this.inputForm = new FormGroup({'word':new FormControl(this.word, [Validators.required]),
        								'meaning':new FormControl(this.meaning, [Validators.required])
    									})

	}

	saveIfEnter(event){
		if(this.inputForm.valid && event.keyCode == 13){
			this.save();
		}

	}

	save(){
		this.dataService.addNewWord(this.word, this.meaning)
		this.inputForm.reset();
	}


}
