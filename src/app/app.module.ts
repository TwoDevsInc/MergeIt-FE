import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MainComponent } from './home/main/main.component';
import { SharedModule } from './shared/shared.module';
import { ServerUrlInterceptor } from './interceptors/server-url.interceptor';
import { ProjectsModule } from './projects/projects.module';
import { NewTeamComponent } from './teams/components/new-team/new-team.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NewTeamComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UsersModule,
    AuthModule,
    SharedModule,
    ProjectsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerUrlInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
