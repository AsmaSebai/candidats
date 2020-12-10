import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CandidatComponent } from './candidat/candidat.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { NavbarComponent } from './navbar/navbar.component';
import { CandidatService } from './candidat.service';
import { CreateCandidatComponent } from './create-candidat/create-candidat.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    CandidatComponent,
    LoginComponent,
    NavbarComponent,
    CreateCandidatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ChartsModule,
  


    
  ],
  providers: [AuthService, CandidatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
