import { Component, OnInit } from '@angular/core';
import { Log } from '../../models/log';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginForm',
  templateUrl: './loginForm.component.html',
  styleUrls: ['./loginForm.component.scss']
})
export class LoginFormComponent implements OnInit {

  public res: any;
  public log: Log;
  public form: FormGroup;
  public error?: string;
  public hide: boolean;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router) {
    this.log = new Log();

    this.form = this.fb.group({
      email: this.fb.control(this.log.email, [Validators.required]),
      password: this.fb.control(this.log.password, [Validators.required])
    });
  }

  public submitForm() {
    const val = this.form.value;
    this.log.email = val.email;
    this.log.password = val.password;
    const result = this.authenticationService.testLog(this.log);
    result.subscribe(res => {
      this.res = res;
      if (this.res.error !== undefined) {
        this.error = this.res.error;
      } else if (this.res.id !== undefined) {
        this.authenticationService.setLoggedInUser(this.res.id);
        this.router.navigate(['/']);
      }
    });
  }

  public hasEmailError() {
    const control = this.form.get('email');
    return control.errors && control.errors.required;
  }

  ngOnInit() {
    this.hide = this.authenticationService.isLoggedIn();
  }
}
