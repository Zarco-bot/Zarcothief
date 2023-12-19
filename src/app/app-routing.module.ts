import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {CreateApplicantComponent } from './components/create-applicant/create-applicant.component';
import { ApplicantProfileComponent } from './components/applicant-profile/applicant-profile.component'
import {LoginComponent} from "./login/login.component";
import {ErrorComponent} from "./error/error.component";
import {ListasComponent} from "./listas/listas.component";

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'listas', component: ListasComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'register', component: CreateApplicantComponent},
  {path: 'profile', component: ApplicantProfileComponent },
  {path: 'login', component: LoginComponent},
  {path: '**', pathMatch: 'full', redirectTo:'login'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
