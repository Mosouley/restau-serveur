import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
  <div style="background-image: url('/assets/img/sidebar-1.jpg') ;">
  <app-side-nav></app-side-nav>
</div>

  `,
  styles: []
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
