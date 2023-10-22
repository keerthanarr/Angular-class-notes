import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { BindingComponent } from './binding/binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { SampleserviceComponent } from './sampleservice/sampleservice.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import {HttpClientModule} from '@angular/common/http';
import { CrudComponent } from './crud/crud.component'
@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    BindingComponent,
    DirectivesComponent,
    PipesComponent,
    SampleserviceComponent,
    ParentComponent,
    ChildComponent,
    ReactiveformComponent,
    CrudComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
