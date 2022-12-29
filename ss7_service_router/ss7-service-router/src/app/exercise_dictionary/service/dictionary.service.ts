import { Injectable } from '@angular/core';
import {Dictionary} from '../model/dictionary';
import {element} from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionaries: Dictionary[] = [
    {word: 'cat', mean: 'con mèo'},
    {word: 'dog', mean: 'con chó'},
    {word: 'pig', mean: 'con heo'},
    {word: 'buffalo', mean: 'con trâu'},
    {word: 'tiger', mean: 'con hổ'},
    {word: 'lion', mean: 'sư tử'},
    {word: 'horse', mean: 'con ngựa'},
  ]

  constructor() { }

  getAll(){
    return this.dictionaries;
  }


  translate(word: string): Dictionary | null {
    let temp = this.dictionaries.filter(element => element.word == word);
    if(temp.length == 0){
      return null;
    }
    return temp[0];
  }
}
