import { Component, OnInit } from '@angular/core';
import { Log } from '../../models/log';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginForm',
  templateUrl: './loginForm.component.html',
  styleUrls: ['./loginForm.component.css']
})
export class LoginFormComponent implements OnInit {

  public log: Log;
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
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
    console.log('submit ! ', this.log);
  }

  ngOnInit() {
  }

}
