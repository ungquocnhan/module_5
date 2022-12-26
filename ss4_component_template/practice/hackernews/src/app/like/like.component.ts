import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  private like = 0;
  constructor() { }

  ngOnInit(): void {
  }

  likeThis(): void {
    this.like++;
  }
}
