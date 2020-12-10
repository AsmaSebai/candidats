import { createComponent } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatComponent } from './candidat/candidat.component';
import { CreateCandidatComponent } from './create-candidat/create-candidat.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [

  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'candidat', component:CandidatComponent},
  {path:'login', component:LoginComponent},
  {path:'nouveauCandidat', component:CreateCandidatComponent}

  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
