import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ButtonComponent} from "./button/button.component";
import {InputComponent} from "./input/input.component";
import {CardComponent} from "./card/card.component";

const routes: Routes = [
  {path: 'button', component: ButtonComponent},
  {path: 'input', component: InputComponent},
  {path: 'card', component: CardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
