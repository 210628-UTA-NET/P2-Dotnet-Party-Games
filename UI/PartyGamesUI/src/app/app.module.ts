import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LivechatComponent } from './livechat/livechat.component';
import { LearderboardComponent } from './learderboard/learderboard.component';
import { MatchmakingComponent } from './matchmaking/matchmaking.component';
import { LoginComponent } from './login/login.component';
import { GamesComponent } from './games/games.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    LivechatComponent,
    LearderboardComponent,
    MatchmakingComponent,
    LoginComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:"livechat", component:LivechatComponent}
    ]),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
