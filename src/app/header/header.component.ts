import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from '../Models/ViewMembersModel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  enteredName: string;
  _Member: Member;

  constructor(private _httpClient: HttpClient) { }

  ngOnInit() {
  }

  postMember() {
    this._Member = new Member();
    this._Member.Name = document.getElementById('recipient-name').innerHTML;
    this._Member.Address = "Frazer Town";
    this._Member.City = "Bangalore";
    this._Member.Contact = "9812182182";

    this._httpClient.post("http://localhost:49654/api/members", this._Member).subscribe(
      data => {
        console.log("POST Request is successful ", this._Member);
      },
      error => {
        console.log("Error", error);
      }
    );
  }
}
