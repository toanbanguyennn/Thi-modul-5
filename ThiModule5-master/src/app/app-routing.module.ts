import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowComponent} from "./tour/show/show.component";
import {CreateComponent} from "./tour/create/create.component";
import {EditComponent} from "./tour/edit/edit.component";
import {DeleteComponent} from "./tour/delete/delete.component";
import {SingletourComponent} from "./tour/singletour/singletour.component";

const routes: Routes = [
  {path: '', component: ShowComponent},
  {path: 'create', component: CreateComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'delete/:id', component: DeleteComponent},
  {path: 'view/:id', component: SingletourComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
