import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  header = 'Wei Chen';
  subheader = 'Software Engineer';

  github = 'https://github.com/weic99';
  linkedin = 'https://www.linkedin.com/in/wei-chen-b44a8012b/';

  constructor() { }

  ngOnInit() {
  }

}
