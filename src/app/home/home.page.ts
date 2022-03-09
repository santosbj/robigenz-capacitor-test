import { Component } from '@angular/core';
import { FirebaseAuthentication } from '@robingenz/capacitor-firebase-authentication';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  async signin() {
    const result = await FirebaseAuthentication.signInWithGoogle();
    console.log(result);
    }

}
