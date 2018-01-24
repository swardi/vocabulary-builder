import {Injectable} from '@angular/core';

/**
 * Vocabulary class.
 * 
 * @constructor
 * @param {Number} id - The id.
 * @param {String} word  - The word in foreign language.
 * @param {String} meaning  - The word in English.
 */
export function Vocabulary(id, word, meaning) {
    this.id = id;
    this.word = word;
    this.meaning = meaning;
}

@Injectable()
export class DataService {
	
    wordList=null;

    constructor() {

        this.wordList = [];
        this.wordList.push(new Vocabulary(1, "Danke", "Thank you"));
        this.wordList.push(new Vocabulary(1, "Manner", "Men"));
        this.wordList.push(new Vocabulary(1, "Fraun", "Women"));
        this.wordList.push(new Vocabulary(1, "Tschuss", "Bye"));
        this.wordList.push(new Vocabulary(1, "Jungen", "Boy"));
        this.wordList.push(new Vocabulary(1, "Kinder", "Child"));
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
        if(this.search(word)) return;
        let newItem = new Vocabulary(this.wordList.length+1, word, meaning);
        this.wordList.push(newItem);
    }

    deleteWord(word){
        for(var i=0; i<this.wordList.length; i++){
            if(this.wordList[i].word === word){
                this.wordList.splice(i, 1);
                return;
            }
        }
    }
} 