import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user-service.service';

@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrls: ['./user-edit-form.component.css']
})
export class UserEditFormComponent implements OnInit {

  user: User;
  
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
    this.user = new User();
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
     selectedUser: User;
    };
    this.user = state.selectedUser;
  }

  ngOnInit() {
    this.userService.findById(this.user).subscribe(data => {
      this.user = data;
    });
  }

  onSubmit() {
    this.userService.update(this.user).subscribe(result => {
      this.goToUserList();
    });
  }

  goToUserList() {
    this.router.navigate(['/users']);
  }

  onDelete() {
    this.userService.delete(this.user).subscribe(result => {
      this.goToUserList();
    })
  }
}
