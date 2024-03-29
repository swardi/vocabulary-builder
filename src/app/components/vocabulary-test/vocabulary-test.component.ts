import { Component } from '@angular/core';
import {DataService} from "../../data.service";
import {Alert} from "../../alert.component";
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  templateUrl: './vocabulary-test.component.html',
  
})

export class VocabularyTestComponent {

	wordList = [];
	currentIndex : number = 0;
	testForm : FormGroup;
	meaning : string = "";
	progressValue : number = 0;
	displayResults : boolean = false;
	correctCount:number = 0;
	inCorrectCount:number = 0;
  	constructor(private dataService: DataService, private modalService: NgbModal) {
  		
  	}

    ngOnInit() {
    	this.wordList = this.dataService.loadRandomList(20);
    	this.testForm = new FormGroup({'meaning':new FormControl(this.meaning, [])
    										});
	}

	nextWord() {
		
		this.checkCorrectnessAndIncrementCounters();
		
		this.progressValue	= Math.floor(100*(this.currentIndex+1) / this.wordList.length);
		this.testForm.reset();

		if(this.currentIndex >= this.wordList.length-1){
			this.displayResults = true;
			return;
		}
		this.currentIndex++;
	}

	checkCorrectnessAndIncrementCounters(){
		if(!this.meaning || this.meaning.length==0){
			this.inCorrectCount++;
			this.wordList[this.currentIndex].empty=true;
			return;
		}
		if(this.meaning.toLowerCase() === this.wordList[this.currentIndex].meaning.toLowerCase()){
			this.correctCount++;
			this.wordList[this.currentIndex].correct=true;
		}else{
			this.inCorrectCount++;
			this.wordList[this.currentIndex].correct=false;
		}
	}

}
