import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditComponent } from './tour/edit/edit.component';
import { CreateComponent } from './tour/create/create.component';
import { ShowComponent } from './tour/show/show.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { DeleteComponent } from './tour/delete/delete.component';
import { SingletourComponent } from './tour/singletour/singletour.component';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    CreateComponent,
    ShowComponent,
    DeleteComponent,
    SingletourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
