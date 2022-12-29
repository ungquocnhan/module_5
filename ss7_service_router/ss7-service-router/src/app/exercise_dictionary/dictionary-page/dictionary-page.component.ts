import { Component, OnInit } from '@angular/core';
import {Dictionary} from '../model/dictionary';
import {DictionaryService} from '../service/dictionary.service';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  dictionaries: Dictionary[] = [];

  constructor(private dictionaryService: DictionaryService) {
    this.dictionaries = this.dictionaryService.getAll();
  }

  ngOnInit(): void {
  }

}
