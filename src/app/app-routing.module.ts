import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body/body.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UnsolveissuesComponent } from './unsolveissues/unsolveissues.component';
import { SolveissueComponent } from './solveissue/solveissue.component';

import { IssueDetailsComponent } from './issue-details/issue-details.component';
import { SpamDetailsComponent } from './spam-details/spam-details.component';
const routes: Routes = [
  // other routes
  {path: '', redirectTo:'/login', pathMatch:'full'},
  {path: 'login', component : LoginComponent},
  {path: 'bodycomponent', component :BodyComponent},
  {path: 'dashbord', component :DashboardComponent},
  {path: 'solveissues', component :SolveissueComponent},
  {path: 'unsolveissues', component :UnsolveissuesComponent},
  { path: 'issue-details', component: IssueDetailsComponent },
  { path: '', redirectTo: '/cards', pathMatch: 'full' },
  { path: 'unsolveissues/:id', component: UnsolveissuesComponent },
  { path: 'details-unsolve', component: IssueDetailsComponent },
  { path: 'details-solve', component: SolveissueComponent },
  { path: 'Spam-details', component: SpamDetailsComponent},
  // other routes
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
