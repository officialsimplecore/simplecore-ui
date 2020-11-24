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

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreButtonModule,
    CoreInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
