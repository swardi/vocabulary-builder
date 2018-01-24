import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Rx'; 

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


/**
 * Vocabulary class.
 * 
 * @constructor
 * @param {Number} id - The id.
 * @param {String} word  - The word in foreign language.
 * @param {String} meaning  - The word in English.
 */
function Vocabulary(id, word, meaning) {
    this.id = id;
    this.word = word;
    this.meaning = meaning;
}

@Injectable()
export class DataService {
	
    wordList=null;

    constructor() {

        this.wordList = [];
    }

    search(word){
        for(var i=0; i<this.wordList.length; i++){
            if(this.wordList[i].word === word){
                return this.wordList[i];
            }
        }
        return null;
    }

    load(){
        return this.wordList;
    }

    addNewWord(word, meaning){
        //TODO Search and return item if the item is already present in the list
        let newItem = new Vocabulary(this.wordList.length+1, word, meaning);
        this.wordList.push(newItem);
    }

    deleteWord(word){
        this.wordList.forEach(function(item, index){
            if(item.word === word){
                this.wordList.splice(index);
            }
        })
    }
} 