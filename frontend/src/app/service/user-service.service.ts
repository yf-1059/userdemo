import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs'; 

@Injectable()
export class UserService {

  usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public findById(user: User):Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/${user.id}`);
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }

  public update(user: User) {
    return this.http.put<User>(this.usersUrl, user);
  }

  public delete(user: User) {
    return this.http.delete<User>(this.usersUrl, { body: user });
  }
}
