import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ButtonComponent} from "./button/button.component";
import {InputComponent} from "./input/input.component";
import {SelectComponent} from "./select/select.component";
import {FormsComponent} from "./forms/forms.component";
import {CardComponent} from "./card/card.component";
import {ModalComponent} from "./modal/modal.component";

const routes: Routes = [
  {path: 'button', component: ButtonComponent},
  {path: 'input', component: InputComponent},
  {path: 'select', component: SelectComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'card', component: CardComponent},
  {path: 'modal', component: ModalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
