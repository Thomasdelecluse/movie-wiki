import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {publish} from "rxjs";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {
  }

  inscription = new FormGroup({
    prenom: new FormControl(''),
    login: new FormControl(''),
    pass: new FormControl(''),
  })

  connexion = new FormGroup({
    login: new FormControl<string>(''),
    pass: new FormControl<string>(''),
  })

  ngOnInit(): void {
  }

  onFormSubmitAuth() {
    this.authService.login({
      email: this.connexion.controls['login'].value ?? '',
      mdp: this.connexion.controls['pass'].value ?? ''
    }, (response) => {
      const token: string  = response.token;
      localStorage.setItem("token", token);
    })
  }

  onFormSubmitIns() {
    this.authService.register({
      email: this.inscription.controls['login'].value ?? '',
      mdp: this.inscription.controls['pass'].value ?? '',
      name: this.inscription.controls['prenom'].value ?? ''
    }, (response) => {
    })
  }
}
