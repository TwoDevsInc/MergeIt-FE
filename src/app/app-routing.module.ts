import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './home/main/main.component';
import { IndexComponent } from './home/index/index.component';
import { ProjectBoardComponent } from './projects/components/project-board/project-board.component';
import { LoginFormComponent } from './home/login-form/login-form.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: "", redirectTo : "dashboard", pathMatch: "full" },
  { path: "testLogin", component : IndexComponent, canActivate : [LoginGuard] },
  { path: "login", component: LoginFormComponent},
  { path: "dashboard", component: MainComponent, canActivate : [LoginGuard]},
  { path: "project/:id", component : ProjectBoardComponent, canActivate : [LoginGuard]},
  { path:"**", redirectTo: ""}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
