// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";

// UI Modules

// Components
import { AppComponent } from './app.component';
import {CoreButtonModule} from 'projects/simplecore-ui/src/lib/button/public-api';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import {CoreInputModule} from "projects/simplecore-ui/src/lib/input";
import { SelectComponent } from './select/select.component';
import {CoreSelectModule} from "projects/simplecore-ui/src/lib/select";
import { FormsComponent } from './forms/forms.component';
import { CardComponent } from './card/card.component';
import {CoreCardModule} from "../../../simplecore-ui/src/lib/card";

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    FormsComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreButtonModule,
    CoreInputModule,
    CoreSelectModule,
    CoreCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
