import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _authService :AuthService,
    private _snackBar:SnackbarService,
    private _router:Router
  ) { }

  ngOnInit(): void {
  }

  onLogOut(){
    this._authService.logOut()
    .subscribe({
      next:res =>{
        this._snackBar.openSnackBar(res.msg)
        this._router.navigate([''])
      },
      error:err=>{
                this._snackBar.openSnackBar(err)


      }
    })
    




}
}
