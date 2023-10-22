import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

@Injectable({
  providedIn: 'root'
})
export class GuardDeactivateGuard implements CanDeactivate<ReactiveformComponent> {
  canDeactivate(
    component: ReactiveformComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  if(component.login.name == ''){ debugger
    alert("Are you sure to continue on next route")
   return true
  }
 return false
  }

}
