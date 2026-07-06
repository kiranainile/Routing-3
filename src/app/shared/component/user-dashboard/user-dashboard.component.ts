import { Component, OnInit } from '@angular/core';
import { SnackbarService } from '../../service/snackbar.service';
import { UserService } from '../../service/user.service';
import { IUser } from '../../module/user';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  userArr!: Array<IUser>;

  constructor(
    private _userService: UserService,
    private _snackbar: SnackbarService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this._userService.fetchUser()
      .subscribe({
        next: (data) => {
          this.userArr = data;
        },
        error: (err) => {
          
          this._snackbar.openSnackBar('err');
        }
      });
  }
}