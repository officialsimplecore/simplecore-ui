// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

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
import {CorePressableModule} from "../../../simplecore-ui/src/lib/_directives/pressable";
import {ModalComponent} from "./modal/modal.component";
import {CoreModal, CoreModalModule} from "../../../simplecore-ui/src/lib/modal";
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import {CoreProgressBarModule} from "../../../simplecore-ui/src/lib/progress-bar";
import { CheckboxComponent } from './checkbox/checkbox.component';
import {CoreCheckboxModule} from "../../../simplecore-ui/src/lib/checkbox";
import { StackComponent } from './stack/stack.component';
import {CoreStackModule} from "../../../simplecore-ui/src/lib/stack";
import {DatepickerComponent} from "./datepicker/datepicker.component";
import {CoreDatePickerModule} from "../../../simplecore-ui/src/lib/datepicker";
import {CoreModalInPlaceModule} from "../../../simplecore-ui/src/lib/modal-in-place";
import {ModalModule} from "../../../simplecore-ui/src/lib/lib/modal.module";
import {registerLocaleData} from "@angular/common";
import HungarianLocale from '@angular/common/locales/hu';
import BritishLocale from '@angular/common/locales/en-GB';
import SpanishLocale from '@angular/common/locales/es';
import {ModalInPlaceComponent} from "./modal-in-place/modal-in-place.component";

registerLocaleData(HungarianLocale);
registerLocaleData(BritishLocale);
registerLocaleData(SpanishLocale);

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    FormsComponent,
    CardComponent,
    ModalComponent,
    ProgressBarComponent,
    CheckboxComponent,
    StackComponent,
    DatepickerComponent,
    ModalInPlaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreButtonModule,
    CoreInputModule,
    CoreSelectModule,
    CoreCardModule,
    CorePressableModule,
    CoreModalModule,
    CoreProgressBarModule,
    CoreCheckboxModule,
    CoreStackModule,
    CoreDatePickerModule,
    ReactiveFormsModule,
    CoreModalInPlaceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
