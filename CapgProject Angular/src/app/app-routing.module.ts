import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { FirstComponent } from './first/first.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ActionComponent } from './action/action.component';
import { ComedyComponent } from './comedy/comedy.component';
import { OtherComponent } from './other/other.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'first', component: FirstComponent},
  {path: 'about', component: AboutComponent},
  {path: 'favorite', component: FavoriteComponent},
  {path: 'action', component: ActionComponent},
  {path: 'comedy', component: ComedyComponent},
  {path: 'other', component: OtherComponent},
  {path: 'add', component: AddComponent},
  {path: 'delete', component: DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
