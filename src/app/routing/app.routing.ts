import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './../home/home.component';
import { LoginComponent } from './../login/login.component';
import { RegisterComponent } from './../register/register.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },  
  { path: 'register',      component: RegisterComponent }
  // { path: '**', component: PageNotFoundComponent }
];

export const AppRouting = RouterModule.forRoot(appRoutes, { 
  // useHash: true
});