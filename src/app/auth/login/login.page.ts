import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  username: string;
  password: string;

  constructor(private toastCtrl: ToastController, private authService: AuthService, private router: Router) { }

  ngOnInit() { }

  signIn(from: NgForm) {
    this.authService.authenticate(from.value.email, from.value.password).subscribe(
      result => {
        this.authService.setSession(result);
        console.log('Logged in successfully', result);

        this.router.navigate(['/explorer']);
      },
      async error => {
        console.log('Error logging in', error);

        const toast = await this.toastCtrl.create({
          message: 'Invalid Login / Password.',
          duration: 1000
        });

        toast.present();
      });
  }
}
