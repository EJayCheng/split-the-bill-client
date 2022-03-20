import { Component, Input, OnInit } from '@angular/core';
import { Member } from '../../util/define';

@Component({
  selector: 'member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
})
export class MemberComponent implements OnInit {
  @Input()
  public data?: Member;

  @Input()
  public prefix?: string;
  public constructor() {}

  ngOnInit(): void {}
}
