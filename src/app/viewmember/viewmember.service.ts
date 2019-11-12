import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from '../Models/ViewMembersModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewmemberService {

  readonly connectionString = 'http://localhost:49654/api/members';
  constructor(private httpClient: HttpClient) { }

  getMembers(): Observable<Member[]> {
    return this.httpClient.get<Member[]>('http://localhost:49654/api/members');
  }
}
