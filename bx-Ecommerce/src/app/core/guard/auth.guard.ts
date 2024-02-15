import { CanActivateFn, Router } from '@angular/router';
import { DatashareService } from '../datashare.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const service=inject(DatashareService);
  const router=inject(Router);
  
  if (!service.isLoggedIn()) {
    router.navigate(['/login']); // go to login if not authenticated
    return false;
  }
    return true;
};
