import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelinesComponent } from './practice_timelines/timelines/timelines.component';
import { YoutubePlaylistComponent } from './practice_listen_music/youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './practice_listen_music/youtube-player/youtube-player.component';
import {ReactiveFormsModule} from '@angular/forms';
import { DictionaryPageComponent } from './exercise_dictionary/dictionary-page/dictionary-page.component';
import { DictionaryDetailComponent } from './exercise_dictionary/dictionary-detail/dictionary-detail.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ImageGalleryModule} from "./practice_gallery/image-gallery/image-gallery.module";
import {GalleryConfig} from "./practice_gallery/image-gallery/token";
import {ImgSliderModule} from './exercise_image_slide/img-slider/img-slider.module';
import {SharedModule} from './product_management/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    TimelinesComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    DictionaryPageComponent,
    DictionaryDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ImageGalleryModule,
    ImgSliderModule,
    SharedModule
  ],
  providers: [
    HttpClient,
    {provide: GalleryConfig, useValue: 3}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
