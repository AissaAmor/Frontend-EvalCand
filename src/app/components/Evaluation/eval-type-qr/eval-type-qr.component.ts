import { Component, OnInit } from "@angular/core";
import { EvaluationService } from "../../../Services/evaluation.service";
import {FormGroup,FormArray} from "@angular/forms";
import { log } from 'util';
@Component({
  selector: "app-eval-type-qr",
  templateUrl: "./eval-type-qr.component.html",
  styleUrls: ["./eval-type-qr.component.css"]
})

export class EvalTypeQRComponent implements OnInit {
  // response: FormArray;
  isStarted: boolean = true;
  chosenType:boolean
  listQR ;
  tab;
  reponse: string = "";
  reponses = [];

  index:number = 0;
  //  qr = new FormGroup({
  //    reponses: new FormArray([
  //     new FormGroup({
        
  //         // response : new FormControl('')
  //       })
  //     ])
  //   });
  i = 0;
  j = 1;

  
  constructor(private evalService: EvaluationService) {}

  ngOnInit() {

this.evalService.displayEval().subscribe(data => {
  console.log(data);

});
}
  next() {
    this.isStarted = false;
    // this.response = this.qr.get("response") as FormArray;
    // this.response.push(
    //   new FormGroup({
        
    //     //  response : new FormControl('')
    //   })
    // );
    // console.log(this.qr.value);
    
    this.reponses.push(this.reponse);
    this.reponse = "";
    this.index = this.index + 1;
    console.log(this.reponses);
  }
  previous(index) {
    this.isStarted = false;
   
    index = index - 1;
  }

  displayEvaluation() {
    this.isStarted = false;
    this.evalService.displayEval().subscribe(data => {
      console.log(data);
        this.listQR = data ;
        this.tab = this.listQR.qr;
       console.log(this.tab[1].question);
      
    
    });
  }

  start(){
    this.isStarted = false;
    this.displayEvaluation();

  }
}
