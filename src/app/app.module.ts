import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CommonModule, FormStyle, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, CommonModule, NgbModule, NgbProgressbarModule],
  providers: [JsonPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
