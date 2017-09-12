import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  github = 'https://github.com/weic99';
  linkedin = 'https://www.linkedin.com/in/wei-chen-b44a8012b/';

  constructor() { }

  ngOnInit() {
  }

}
