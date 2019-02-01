import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const url = `${environment.API_ANIMES}`;

@Injectable()
export class AnimeService {

  constructor(private http: HttpClient) {
  }

  public getAnimes(): Observable<any> {
      return this.http.get(url);
  }

}
