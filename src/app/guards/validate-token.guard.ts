import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidateTokenGuard implements CanActivate {

  constructor(private authService : AuthService, private router : Router){
  }

  canActivate(): Observable<boolean> | boolean | UrlTree {
    return this.authService.validateToken().pipe( tap( valid => {
      if(!valid)
        this.router.navigateByUrl("/login");
    }));
  }
  
}
