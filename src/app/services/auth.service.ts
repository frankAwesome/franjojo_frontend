
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'https://franklerk.co.za';

  constructor(private http: HttpClient, private afAuth: AngularFireAuth) {}

  register(data: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  login(data: { email: string; password: string }): Observable<any> {
    // First, login to backend, then sign in to Firebase with the returned idToken
    return new Observable(observer => {
      this.http.post<any>(`${this.apiUrl}/login`, data).subscribe({
        next: async (res) => {
          try {
            if (res && res.idToken && res.email) {
              // Store the idToken for use in service calls
              localStorage.setItem('token', res.idToken);
              const credential = firebase.auth.EmailAuthProvider.credential(res.email, data.password);
              await this.afAuth.signInWithCredential(credential);
            }
            observer.next(res);
            observer.complete();
          } catch (err) {
            observer.error(err);
          }
        },
        error: (err) => observer.error(err)
      });
    });
  }

  loginWithGoogle() {
    return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}
