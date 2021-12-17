import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthComponent } from './auth/auth.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { LayoutComponent } from './layout/layout.component';
import { ListComponent } from './list/list.component';


// const routes: Routes = [

//   { path: '', component: AuthComponent },
//   { path: 'list', component: ListComponent },
//   { path: 'book/:id', component: EditFormComponent },
// ];
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
