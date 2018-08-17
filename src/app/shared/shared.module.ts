import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarSearchComponent } from './navbar/navbar-search/navbar-search.component';

@NgModule({
  imports: [
    CommonModule,
    //custom modules
    AppRoutingModule
  ],
  exports:[
    NavbarComponent,
    
  ],
  declarations: [
    NavbarComponent, 
    NavbarSearchComponent, 
    
  ]
})
export class SharedModule { }
