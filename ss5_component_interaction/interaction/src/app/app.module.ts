import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameCardComponent } from './practice_name_card/name-card/name-card.component';
import { ProgressBarComponent } from './practice_progress_bar/progress-bar/progress-bar.component';
import { RatingBarComponent } from './exercise_rating_bar/rating-bar/rating-bar.component';
import { CountdownTimerComponent } from './exercise_countdown_timer/countdown-timer/countdown-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    NameCardComponent,
    ProgressBarComponent,
    RatingBarComponent,
    CountdownTimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
