import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class EvaluationService {
  constructor(private http: HttpClient) {}
  addEvaluationQR(object) {
    let header = new HttpHeaders().set(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );
    console.log(object);
    return this.http.post("http://localhost:9000/evaluation/add", object, {
      headers: header
    });
  }

  addEvaluationPrj(object) {
    let header = new HttpHeaders().set(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );
    console.log(object);
    return this.http.post("http://localhost:9000/evaluation/add", object, {
      headers: header
    });
  }

  displayEval(id) {
    let header = new HttpHeaders().set(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );
    // console.log(id);
    return this.http.get(" http://localhost:9000/evaluation/getEval/68", {
      headers: header
    });
  }

  getAllEvaluation() {
    let header = new HttpHeaders().set(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );
    return this.http.get(" http://localhost:9000/evaluation/all", {
      headers: header
    });
  }
}
