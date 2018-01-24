import { Component } from '@angular/core';
import {DataService} from "../../data.service";
import {Alert} from "../../alert.component";
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector:'WordList',
  templateUrl: './word-list.component.html',
  //styleUrls: ['./app.component.css']
})

export class WordListComponent {

	wordList = [];
  	constructor(private dataService: DataService, private modalService: NgbModal) {
  		
  	}

    ngOnInit() {
    	this.wordList = this.dataService.load();
	}

  deleteWord (item) {
      this.dataService.deleteWord(item.word);
  }


}
