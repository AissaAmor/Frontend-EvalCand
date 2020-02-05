import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CoachService {
  constructor(private http: HttpClient) {}
  addCandidat() {
    let header = new HttpHeaders().set(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );
    return this.http.post("http://localhost:9000/coach/addCandidat", {
      headers: header
    });
  }
  afficheAllCand() {
    return this.http.get("http://localhost:9000/candidat/all");
  }
}
