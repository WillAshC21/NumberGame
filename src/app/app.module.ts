import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layer/header/header.component';
import { GameBodyComponent } from './components/game-body/game-body.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GameBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
