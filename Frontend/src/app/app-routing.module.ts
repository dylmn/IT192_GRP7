import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { Home } from './home/home.component';
import { LoginChooser } from './login-chooser/login-chooser.component';
import { UserLogin } from './user-login/user-login.component';
import { AdminLogin } from './admin-login/admin-login.component';
import { NotFound } from './not-found/not-found.component';
import { AdminDogView } from './admin-dog-view/admin-dog-view.component';
import { AdminHome } from './admin-home/admin-home.component';
import { UserAdoption } from './user-adoption/user-adoption.component';
import { UserHome } from './user-home/user-home.component';
import { AdoptionRequestForm } from './adoption-request-form/adoption-request-form.component';
import { DogProfile } from './dog-profile/dog-profile.component';

const routes: Routes = [
  {path: '',redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: Home},
  {path: 'login-chooser', component: LoginChooser},
  {path: 'user-login', component: UserLogin},
  {path: 'admin-login', component: AdminLogin},
  {path: 'not-found', component: NotFound},
  {path: 'admin-dog-view', component: AdminDogView},
  {path: 'admin-home', component: AdminHome},
  {path: 'user-adoption', component: UserAdoption},
  {path: 'user-home', component: UserHome},
  {path: 'adoption-request-form', component: AdoptionRequestForm},
  {path: 'dog-profile', component: DogProfile},
  //{path: 'country/:id', component: ShowCountryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppRoutingModule { }
