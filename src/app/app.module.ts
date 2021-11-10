import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CreateUserComponent } from './Components/create-user/create-user.component';
import { UserListComponent } from './Components/user-list/user-list.component';
import { GroupedListComponent } from './Components/grouped-list/grouped-list.component';
import { FormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav'


@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    UserListComponent,
    GroupedListComponent
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
