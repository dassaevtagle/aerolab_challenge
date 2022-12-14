import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user.model";
import { baseUrl, requestOptions } from "./config";
import { AddPointsResponse } from "./types";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUserInfo(): Observable<User> {
    console.log("getUserInfo called");
    return this.http.get<User>(`${baseUrl}/user/me`, requestOptions);
  }

  addPoints(amount: number): Observable<AddPointsResponse> {
    return this.http.post<AddPointsResponse>(
      `${baseUrl}/user/points`,
      { amount },
      requestOptions
    );
  }
}
