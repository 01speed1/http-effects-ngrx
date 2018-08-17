import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-search',
  templateUrl: './navbar-search.component.html'
})
export class NavbarSearchComponent implements OnInit {

  constructor( private router:Router ) { }

  ngOnInit() {
  }

  searchUser(value:string){
    if (!value || value === "") return;
    this.router.navigate(['/usuario', value  ])
  }

}
