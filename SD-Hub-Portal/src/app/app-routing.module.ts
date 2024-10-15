
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegisterComponent } from './register/register.component';
import { RegisterEducatinComponent } from './register-education/register-educatin.component';
import { RegisterDeclarationComponent } from './register-declaration/register-declaration.component';

const routes: Routes = [
  {path: '', redirectTo: 'signin', pathMatch: 'full'},
  {path: 'signin', component: SigninComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'register-education', component: RegisterEducatinComponent},
  {path: 'register-declaration', component: RegisterDeclarationComponent},
  {path: 'reg', component: RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
