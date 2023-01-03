import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgSliderComponent } from './img-slider.component';
import { ImgSlideComponent } from './img-slide/img-slide.component';
import {ImageGalleryModule} from '../../practice_gallery/image-gallery/image-gallery.module';
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [ImgSliderComponent, ImgSlideComponent],
  exports: [
    ImgSliderComponent
  ],
  imports: [
    CommonModule,
    ImageGalleryModule,
    NgxPaginationModule
  ]
})
export class ImgSliderModule { }
