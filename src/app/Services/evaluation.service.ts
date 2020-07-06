import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class EvaluationService {
  timer;
  seconds: number = 0;
  private evaluationToEdit: any;

  constructor(private http: HttpClient) { }
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


  affichageEval() {
    let header = new HttpHeaders().set(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );
    console.log (this.affichageEval);
    return this.http.get("http://localhost:9000/evaluation/all", {
      headers: header});
     
  }
  displayEval() {
    let header = new HttpHeaders().set(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );

    // console.log(id);
    // return this.http.get(" http://localhost:9000/evaluation/getEval/15", {
    //   headers: header
    // });
    return this.http.get(" http://localhost:9000/evaluation/getEval/17", {
      headers: header
    });
  }


  displayQuiz() {
    let header = new HttpHeaders().set(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );

    // console.log(id);
    // return this.http.get(" http://localhost:9000/evaluation/getEval/15", {
    //   headers: header
    // });
    return this.http.get(" http://localhost:9000/evaluation/getEval/17", {
      headers: header
    });
   
  }

submitTest(object){
  let header = new HttpHeaders().set(
    "Authorization",
    "Bearer " + localStorage.getItem("token")
  );
  

  
  // let reponse ={
  //   List:this.displayQuiz ,
  // }
  console.log(object);
  return this.http.post(" http://localhost:9000/evaluation/answer/227", object, {headers: header});

}



// submitAnswer(answers:any){
//   let answer = {
//     username: this.authenticationService.getUser(),
//     testId: this.testId,
//     answers: answers
//   }
//   console.log(answer);
//   return this.httpClient.post('http://localhost:8081/student/submitAnswer', answer);
// }
























  DuplicateEval(object) {
    let header = new HttpHeaders().set(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );
    console.log(object);
    return this.http.post("http://localhost:9000/evaluation/duplicate", object, {headers: header});
  }


  Save(object) {
    let header = new HttpHeaders().set(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );
    console.log(object);
    return this.http.post("http://localhost:9000/evaluation/edit", object,{headers: header});
  
  }

  setEvaluation(evaluation: any): void {
    this.evaluationToEdit = evaluation;
  }

  getEvaluation(): any {
    return this.evaluationToEdit;
  }
  // start(){
  //   let header = new HttpHeaders().set(
  //     "Authorization",
  //     "Bearer " + localStorage.getItem("token")
  //   );
  //   return this.http.get("http://localhost:9000/evaluation/getEval/"+id, {
  //     headers: header});
  // }
  

}
