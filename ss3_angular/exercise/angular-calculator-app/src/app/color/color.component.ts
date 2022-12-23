import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  public pickColor: string = 'bg-black';

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(target: any): void {
    this.pickColor = target.value;
  }
}
