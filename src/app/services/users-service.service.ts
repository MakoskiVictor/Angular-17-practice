import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import type { User, UserApiData } from '../models';

@Injectable({
  providedIn: 'root',
})
export class UsersServiceService {

  private BASE_URL = 'https://reqres.in/api/users'

  constructor(private httpClient: HttpClient) { }

  getUserApiById (id: number): Observable<User> {
    console.log("INGESO A USER SERVICES", id)
    return this.httpClient.get<UserApiData>(`${this.BASE_URL}/${id}`).pipe(
      map(response => response.data),
      tap(console.log)
    )
  }
}
