import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicRowComponentComponent } from './MasterMindBoard/basic-row-component/basic-row-component.component';
import { BoardComponent } from './MasterMindBoard/board-component/board.component';
import { LegendeComponent } from './MasterMindBoard/legende-component/legende.component';
import { CodeToSolveComponentComponent } from './MasterMindBoard/code-to-solve-component/code-to-solve-component.component';
import { HeaderComponent } from './header-component/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicRowComponentComponent,
    BoardComponent,
    LegendeComponent,
    CodeToSolveComponentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
