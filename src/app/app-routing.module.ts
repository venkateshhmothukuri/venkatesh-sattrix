import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// const usersModule = () => import('./users/users.module').then(x => x.UsersModule);
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { LoginService } from './services/login.service';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent, canActivate: [LoginService ] },
    { path: 'register',  component: RegisterComponent  },
    {
      path: 'list',
      loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      canActivate: [
        AuthService,
      ],
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
