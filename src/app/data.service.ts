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
        //Initial data 
        this.wordList.push(new Vocabulary(1, "Danke", "Thank you"));
        this.wordList.push(new Vocabulary(2, "Manner", "Men"));
        this.wordList.push(new Vocabulary(3, "Fraun", "Women"));
        this.wordList.push(new Vocabulary(4, "Tschuss", "Bye"));
        this.wordList.push(new Vocabulary(5, "Jungen", "Boy"));
        this.wordList.push(new Vocabulary(6, "Kinder", "Child"));
    }

    search(word: string){
        for(var i=0; i<this.wordList.length; i++){
            if(this.wordList[i].word === word){
                return this.wordList[i];
            }
        }
        return null;
    }

    loadRandomList(count: number){
        if(count>=this.wordList.length) count = this.wordList.length-1;
        let randomList = [];
        for(var i=0; i<=count; i++){
            let index = Math.floor((Math.random() * count) + 1);
            let alreadyPresent = false;
                    //Make sure this element is not present here
                    //TODO refactor
            for(var i=0; i<randomList.length; i++){
                if(randomList[i].word ===  this.wordList[index].word){
                    alreadyPresent=true;
                }
            }
            if(!alreadyPresent) {
                //Copy the objects to that testing controller can add new fields and original list will remain intact.
                randomList.push(new Vocabulary(this.wordList[index].id, this.wordList[index].word, this.wordList[index].meaning))
            
            }
            
        }
        return randomList;
    }

    load(){
        return this.wordList;
    }

    addNewWord(word : string, meaning : string){
        if(this.search(word)) return;
        let newItem = new Vocabulary(this.wordList.length+1, word, meaning);
        this.wordList.push(newItem);
    }

    deleteWord(word : string){
        for(var i=0; i<this.wordList.length; i++){
            if(this.wordList[i].word === word){
                this.wordList.splice(i, 1);
                return;
            }
        }
    }
} 