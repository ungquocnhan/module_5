import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TimelinesComponent} from './practice_timelines/timelines/timelines.component';
import {YoutubePlaylistComponent} from './practice_listen_music/youtube-playlist/youtube-playlist.component';
import {YoutubePlayerComponent} from './practice_listen_music/youtube-player/youtube-player.component';
import {ProductListComponent} from './product_management/product/product-list/product-list.component';
import {ProductCreateComponent} from './product_management/product/product-create/product-create.component';
import {DictionaryPageComponent} from './exercise_dictionary/dictionary-page/dictionary-page.component';
import {DictionaryDetailComponent} from './exercise_dictionary/dictionary-detail/dictionary-detail.component';
import {ProductEditComponent} from './product_management/product/product-edit/product-edit.component';
import {NavBarComponent} from './product_management/shared/nav-bar/nav-bar.component';

const routes: Routes = [

  {
    path: 'timelines',
    component: TimelinesComponent
  },
  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children: [{
      path: ':id',
      component: YoutubePlayerComponent
    }]
  },
  {
    path: 'product',
    loadChildren: () => import('./product_management/product/product.module').then(module => module.ProductModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./product_management/category/category.module').then(module => module.CategoryModule)
  },
  {
    path: 'dictionary',
    component: DictionaryPageComponent,
    children: [
      {
        path: 'detail/:word',
        component: DictionaryDetailComponent
      }
    ]
  },
  {
    path: 'dictionary/detail/:word',
    component: DictionaryDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
