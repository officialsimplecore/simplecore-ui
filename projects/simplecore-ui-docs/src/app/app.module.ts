// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// UI Modules
import { SimpleCoreUIModule } from 'simplecore-ui';


// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SimpleCoreUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
