import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CoachService {
  constructor(private http: HttpClient) {}
  // coachHeader() {
  //   let header = new HttpHeaders().set(
  //     "Authorization",
  //     "Bearer " + localStorage.getItem("token")
  //   );

  //   return this.http.post(" http://localhost:9000/coach/add", {
  //     headers: header
  //   });
  // }

  // editCoach(id) {
  //   return this.http.get("http://localhost:9000/9000/findcoach/" + id);
  // }
}
