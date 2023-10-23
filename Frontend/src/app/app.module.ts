import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { HttpClientModule } from '@angular/common/http';

import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    Home,
    LoginChooser,
    UserLogin,
    AdminLogin,
    NotFound,
    AdminDogView,
    AdminHome,
    UserAdoption, 
    UserHome,
    AdoptionRequestForm,
    DogProfile,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
