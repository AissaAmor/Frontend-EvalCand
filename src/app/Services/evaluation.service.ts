import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class EvaluationService {
  private evaluationToEdit: any;
  constructor(private http: HttpClient) {}

  //Ajout evaluation de type QR
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

  //Ajout evaluation de type PROJET
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

  //Affichage l'evaluation pour le candidat
  displayEval() {
    let header = new HttpHeaders().set(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );
    // console.log(id);
    return this.http.get(" http://localhost:9000/evaluation/getEval/13", {
      headers: header
    });
  }

  //Affiche tout les Evaluations
  affichageEval() {
    let header = new HttpHeaders().set(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );
    return this.http.get("http://localhost:9000/evaluation/all", {
      headers: header
    });
  }

  //Duplicate evaluation
  DuplicateEval(object) {
    let header = new HttpHeaders().set(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );
    console.log(object);
    return this.http.post(
      "http://localhost:9000/evaluation/duplicate",
      object,
      { headers: header }
    );
  }

  //Modifier evaluation
  Save(object) {
    let header = new HttpHeaders().set(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );
    console.log(object);
    return this.http.post("http://localhost:9000/evaluation/edit", object, {
      headers: header
    });
  }

  setEvaluation(evaluation: any): void {
    this.evaluationToEdit = evaluation;
  }

  getEvaluation(): any {
    return this.evaluationToEdit;
  }
}
