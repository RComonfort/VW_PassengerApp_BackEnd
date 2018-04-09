import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/authentication/login/login.component';

import { AuthService } from './services/auth.service';
import { LogoutComponent } from './components/authentication/logout/logout.component';
import { HomeComponent } from './components/home/home.component';
import { CrudService } from './services/crud.service';
import { LogService } from './services/log.service';
import { NavComponent } from './components/nav/nav.component';
import { ProjectListComponent } from './components/projects/project-list/project-list.component';
import { ProjectCreateComponent } from './components/projects/project-create/project-create.component';
import { MemberCreateComponent } from './components/member/member-create/member-create.component';
import { ProjectUpdateComponent } from './components/projects/project-update/project-update.component';
import { ProjectRetrieveComponent } from './components/projects/project-retrieve/project-retrieve.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    NavComponent,
    ProjectListComponent,
    ProjectCreateComponent,
    MemberCreateComponent,
    ProjectUpdateComponent,
    ProjectRetrieveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService,
    CrudService,
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
