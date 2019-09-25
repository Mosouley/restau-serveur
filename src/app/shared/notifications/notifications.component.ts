import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {


  constructor(public toastr: ToastrService) { }

  ngOnInit() {
  }

  showToaster() {
    this.toastr.info('Hello, I\'m the toastr message.');
}

}
