// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// UI Modules

// Components
import { AppComponent } from './app.component';
import {CoreButtonModule} from 'projects/simplecore-ui/src/lib/button/public-api';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import {CoreInputModule} from "projects/simplecore-ui/src/lib/input";
import { CardComponent } from './card/card.component';
import {CoreCardModule} from "../../../simplecore-ui/src/lib/card";

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    InputComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreButtonModule,
    CoreInputModule,
    CoreCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
