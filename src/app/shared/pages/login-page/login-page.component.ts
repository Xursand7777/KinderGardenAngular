import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import { ToastEvokeService } from '@costlydeveloper/ngx-awesome-popup';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public form!: FormGroup;


  constructor(private _auth:AuthService,
              private _router: Router,
              public toastEvokeService: ToastEvokeService
              ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.maxLength(6)])
    })
  }

  onSubmit(form: FormGroup):void {
    this._auth.login(form).subscribe((response) =>
      () => {
        this.toastEvokeService.success('I am title!', 'I am a message!').subscribe();
        this._router.navigate(['home'])
      },
      (error) => {
        this.toastEvokeService.danger('I am title!', 'I am a message!').subscribe();
      }
    )
  }
}
