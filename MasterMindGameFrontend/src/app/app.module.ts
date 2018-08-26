import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicRowComponentComponent } from './MasterMindBoard/basic-row-component/basic-row-component.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicRowComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
