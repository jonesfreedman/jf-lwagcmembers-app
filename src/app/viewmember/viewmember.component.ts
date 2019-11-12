import { Component, OnInit } from '@angular/core';
import { ViewmemberService } from '../viewmember/viewmember.service';
import { Member } from '../Models/ViewMembersModel';

@Component({
  selector: 'app-viewmember',
  templateUrl: './viewmember.component.html',
  styleUrls: ['./viewmember.component.css']
})
export class ViewmemberComponent implements OnInit {
  memberArray: Member[];
  constructor(private _viewMemberService: ViewmemberService) { }

  ngOnInit() {
    this.viewMembers();
  }

  viewMembers() {
    this._viewMemberService.getMembers().subscribe(data => {
      this.memberArray = data;
    });
  }
}
