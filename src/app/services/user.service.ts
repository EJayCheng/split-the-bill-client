import { Injectable } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { BehaviorSubject } from 'rxjs';
import { LoginComponent } from '../pages/login/login.component';
import { Member } from '../util/define';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public user$ = new BehaviorSubject<Member>(null as any);

  public constructor(private readonly modal: NzModalService) {}

  public get isLogged(): boolean {
    return !!this.user$.getValue();
  }

  public openLoginDialog(): void {
    this.modal.create({
      nzTitle: 'Login by LINE',
      nzContent: LoginComponent,
      nzClosable: false,
      nzFooter: [],
      nzMaskClosable: false,
    });
  }
}
