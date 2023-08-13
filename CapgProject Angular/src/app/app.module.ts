import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { FirstComponent } from './first/first.component';
import { AboutComponent } from './about/about.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ActionComponent } from './action/action.component';
import { ComedyComponent } from './comedy/comedy.component';
import { OtherComponent } from './other/other.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FirstComponent,
    AboutComponent,
    FavoriteComponent,
    ActionComponent,
    ComedyComponent,
    OtherComponent,
    AddComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
