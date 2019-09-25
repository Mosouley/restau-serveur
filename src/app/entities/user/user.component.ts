import { User } from './../../shared/model/user';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataModel } from '../../shared/model/data.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {

  users: User[];
  userForm: FormGroup;
  user: User;
  usersModel: DataModel[];
  constructor(private fb: FormBuilder,
  public route: ActivatedRoute,
  public userService: UserService) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      lastname: ['', Validators.required],
      password: ['', Validators.required]

    });
    this.users = this.route.snapshot.data.users ;

    this.usersModel = [
      new DataModel('id', 'ID', 'number', true, []),
      new DataModel('username', 'Nom  Utilisateur', 'string', false, []),
      new DataModel('lastname', 'Nom Complet', 'string', false, []),
      new DataModel('password', 'Mot de Passe', 'password', false, [])

    ];
  }

}
