import { Component } from '@angular/core';
import { UserService } from './service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title: string;

  constructor(private router: Router) {
    this.title = "List of Users";
  }
 
  isUsersRoute() {
    return this.router.url === '/users';
  }

  isAddOrUpdateRoute() {
    return this.router.url === '/addUser' || this.router.url === '/editUser';
  }
}
