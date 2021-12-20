import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AuthComponent } from './components/auth/auth.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ListComponent } from './components/list/list.component';


const routes: Routes = [

  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'list', component: ListComponent },
      { path: 'book/:id', component: EditFormComponent },
    ], canActivate: [AuthGuard]
  },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
