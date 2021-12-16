import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [

  { path: '', component: AuthComponent },
  { path: 'list', component: ListComponent },
  { path: 'book/:id', component: EditFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
