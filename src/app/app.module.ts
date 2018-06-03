import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateFormValComponent } from './template-form-val/template-form-val.component';
import { myNameValidator } from './template-form-val/cutom-val.directive';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormValComponent,
    myNameValidator
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
