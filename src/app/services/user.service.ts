import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user.model";
import { baseUrl, requestOptions } from "./config";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getUserInfo() : Observable<User> {
    return this.http.get<User>(`${baseUrl}/user/me`, requestOptions)
  }
}
