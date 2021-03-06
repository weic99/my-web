import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  header = 'Wei Chen';
  subheader = 'Software Engineer';

  gitHub = 'https://github.com/weic99';
  linkedin = 'https://www.linkedin.com/in/wei-chen-b44a8012b/';

  constructor() { }
}
