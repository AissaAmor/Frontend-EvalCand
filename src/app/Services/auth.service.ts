import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import * as JWT from "jwt-decode";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  connectedCoach: any;

  constructor(private http: HttpClient) {
    this.getCoach();
  }
  coachHeader() {
    let header = new HttpHeaders().set(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );

    return this.http.post(" http://localhost:9000/coach/add", {
      headers: header
    });
  }
  login(object) {
    console.log(object);
    return this.http.post("http://localhost:9000/coach/authenticate", object);
  }

  getCoach() {
    if (localStorage.getItem("token"))
      return (this.connectedCoach = JWT(localStorage.getItem("token")));
  }
  iscoachLoggedIn() {
    let tokenValue = localStorage.getItem("token");
    console.log(tokenValue);
    return true;
  }

  logOut() {
    localStorage.removeItem("token");
  }
}
