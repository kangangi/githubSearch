import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RoutingModule} from './routing/routing.module'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RepoInfoComponent } from './repo-info/repo-info.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ItalicDirective } from './italic.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RepoInfoComponent,
    SearchFormComponent,
    UserInfoComponent,
    ItalicDirective,
    NavbarComponent,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
