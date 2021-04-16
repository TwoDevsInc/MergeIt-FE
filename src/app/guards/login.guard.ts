import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { AuthService } from '../auth/services/auth.service';
import { UserService } from '../users/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
  constructor(private router: Router, private authService: AuthService, private userService : UserService) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      let isAuthenticated = false;

      this.authService.isAuthenticated$.pipe( map(value => {
        if(localStorage.getItem("token") !== null)
          return true;
        else return false;
      })).subscribe( data => {
        isAuthenticated = data;        
    });  
    
    if(!isAuthenticated){
      this.router.navigateByUrl('/login');
    }

    return this.authService.isAuthenticated$.pipe( take(1));
  }
  
}
