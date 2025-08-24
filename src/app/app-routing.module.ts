import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';
import { HomeComponent } from './home.component';
import { ProfileComponent } from './profile.component';
import { CreateStoryComponent } from './createstory.component';
import { DocsComponent } from './docs.component';
import { LandingComponent } from './landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'createstory', component: CreateStoryComponent, canActivate: [AuthGuard] },
  { path: 'docs', component: DocsComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
