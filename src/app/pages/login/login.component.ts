import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private readonly userService: UserService,
    private readonly router: Router,
    private readonly modal: NzModalRef
  ) {}

  ngOnInit() {
    this.lineLogin();
  }

  public lineLogin() {
    this.userService.user$.next({
      id: 1,
      name: 'EJay',
      lineProfileId: 'Ub688a979178c4cd7b690bc7787f92214',
      // thumbnail:
      //   'https://upload.wikimedia.org/wikipedia/zh/b/b9/Mfile_342_47465_1.jpg',
    });
    this.router.navigate([]);
    this.modal.destroy();
  }
}
