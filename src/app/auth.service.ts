import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, from, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  login(id: string, password: string): void {
    this.afAuth.signInWithEmailAndPassword(id, password)
      .then(
        res => {
          localStorage.setItem('token', 'true');

          if (res.user?.emailVerified) {
            this.router.navigate(['/verify-email']);
          } else {
            this.router.navigate(['bodycomponent']);
          }
        },
        err => {
          alert(err.message);
          this.router.navigate(['/login']);
        }
      );
  }

  // Separate function for navigation
  navigateToBodyComponent(): void {
    this.router.navigate(['/BodyComponent']);
  }

  signOut(): Observable<void> {
    return from(this.afAuth.signOut()).pipe(
      catchError(error => {
        console.error('Sign-out error:', error);
        return of(undefined);
      })
    );
  }

  getCurrentUser(): Observable<firebase.default.User | null> {
    return this.afAuth.authState;
  }
}
