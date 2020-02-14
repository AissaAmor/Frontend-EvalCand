import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  constructor(private http: HttpClient) { }
  addEvaluationQR(object) {
    let header = new HttpHeaders().set(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );
    console.log(object);
    return this.http.post("http://localhost:9000/evaluation/addQR", object, {
      headers: header
    });
}

addEvaluationPrj(object){
  let header = new HttpHeaders().set(
    "Authorization",
    "Bearer " + localStorage.getItem("token")
  );
  console.log(object);
  return this.http.post("http://localhost:9000/evaluation/addProjet", object, {
    headers: header
  });
}

 }
