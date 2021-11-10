import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './Components/create-user/create-user.component';
import { GroupedListComponent } from './Components/grouped-list/grouped-list.component';
import { UserListComponent } from './Components/user-list/user-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'create-user', pathMatch: 'full' },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'grouped-list', component: GroupedListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
