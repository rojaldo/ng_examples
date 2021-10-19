import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator/calculator.component';
import { DisplayComponent } from './components/calculator/display/display.component';
import { KeyboardComponent } from './components/calculator/keyboard/keyboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DisplayComponent,
    KeyboardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
