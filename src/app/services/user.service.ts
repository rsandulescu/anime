import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const url = `${environment.API_USER}`;

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  public getUser(): Observable<any> {
      return this.http.get(url);
  }

}
