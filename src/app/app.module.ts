import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponent } from './components/elements/input/input.component';
import { ButtonComponent } from './components/elements/button/button.component';
import { SelectComponent } from './components/elements/select/select.component';
import { DateComponent } from './components/elements/date/date.component';
import { RadiobuttonComponent } from './components/elements/radiobutton/radiobutton.component';
import { CheckboxComponent } from './components/elements/checkbox/checkbox.component';
import { DynamicFieldDirective } from './components/elements/dynamic-field/dynamic-field.directive';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { FormsService } from './services/forms.service';
import { HttpClientModule } from '@angular/common/http'
import { ServerResolver} from './services/server-resolver.service';
import { UserComponent } from './components/user/user.component';
import { FormarrayComponent } from './components/elements/formarray/formarray.component';
@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    DynamicFieldDirective,
    DynamicFormComponent,    
    UserComponent, 
    FormarrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FormsService,ServerResolver],
  bootstrap: [AppComponent],
  entryComponents:[
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    FormarrayComponent

  ]
})
export class AppModule { }
