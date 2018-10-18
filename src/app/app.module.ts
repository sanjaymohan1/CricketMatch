import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedComponent } from './shared/shared.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    SharedComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
