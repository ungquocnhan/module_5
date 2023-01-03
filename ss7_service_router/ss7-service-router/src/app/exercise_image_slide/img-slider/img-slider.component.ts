import {Component, Inject, OnInit, Optional} from '@angular/core';
import {GalleryConfig} from '../../practice_gallery/image-gallery/token';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css']
})
export class ImgSliderComponent implements OnInit {
  listImage = [
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=1',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=2',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=3',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=4'
  ];

  itemWidth: number = 0;
  config = 4;
  page: number = 0;
  constructor(@Inject(GalleryConfig)
              @Optional()
                config: number
  ) {if (config) {
    this.config = config; }}

  ngOnInit(): void {
    this.itemWidth = 500 / this.config;
  }

}
