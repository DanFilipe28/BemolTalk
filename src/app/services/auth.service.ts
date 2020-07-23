import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afa: AngularFireAuth) { }

 async login(user: User) {
    return this.afa.signInWithEmailAndPassword(user.email, user.senha);
  }
  async register(user: User) {
    return this.afa.createUserWithEmailAndPassword(user.email, user.senha);
  }
 
  logout() {

  }

  getAuth() {
return this.afa.authState;
  }
}
