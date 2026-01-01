import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabtaskComponent } from './shared/component/tabtask/tabtask.component';
import { FruitsComponent } from './shared/component/fruits/fruits.component';

@NgModule({
  declarations: [
    AppComponent,
    TabtaskComponent,
    FruitsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
