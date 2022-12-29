import {Component, OnInit} from '@angular/core';
import {Dictionary} from '../model/dictionary';
import {ActivatedRoute} from '@angular/router';
import {DictionaryService} from '../service/dictionary.service';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  dictionary: Dictionary | null = {};

  constructor(private activatedRoute: ActivatedRoute,
              private dictionaryService: DictionaryService) {
    this.activatedRoute.paramMap.subscribe(data => {
      const word = data.get('word');
      if (word != null) {
        this.dictionary = this.dictionaryService.translate(word);
      }
    });
  }

  ngOnInit(): void {
  }

}
