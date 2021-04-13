import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './home/main/main.component';
import { IndexComponent } from './home/index/index.component';
import { ProjectBoardComponent } from './projects/components/project-board/project-board.component';

const routes: Routes = [
  { path: "", component: IndexComponent, pathMatch: "full" },
  { path: "dashboard", component: MainComponent },
  { path: "project/:id", component : ProjectBoardComponent },
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
