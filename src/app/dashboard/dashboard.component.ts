import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
  <div class="sidebar" data-color="danger" data-background-color="white" data-image="./assets/img/sidebar-1.jpg">
  <app-side-nav></app-side-nav>
  <div class="sidebar-background" style="background-image: url(./assets/img/sidebar-4.jpg)"></div>
</div>

  `,
  styles: []
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
