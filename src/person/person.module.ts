import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { LoginFormComponent } from './container/loginForm/loginForm.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './services/authentication.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginFormComponent,
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthenticationService
  ]
})
export class PersonModule { }
