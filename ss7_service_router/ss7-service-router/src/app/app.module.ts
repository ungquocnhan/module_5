import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelinesComponent } from './practice_timelines/timelines/timelines.component';
import { YoutubePlaylistComponent } from './practice_listen_music/youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './practice_listen_music/youtube-player/youtube-player.component';
import { ProductListComponent } from './product_management/product/product-list/product-list.component';
import { ProductCreateComponent } from './product_management/product/product-create/product-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import { DictionaryPageComponent } from './exercise_dictionary/dictionary-page/dictionary-page.component';
import { DictionaryDetailComponent } from './exercise_dictionary/dictionary-detail/dictionary-detail.component';
import { ProductEditComponent } from './product_management/product/product-edit/product-edit.component';
import { ProductDeleteComponent } from './product_management/product/product-delete/product-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelinesComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    ProductListComponent,
    ProductCreateComponent,
    DictionaryPageComponent,
    DictionaryDetailComponent,
    ProductEditComponent,
    ProductDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
