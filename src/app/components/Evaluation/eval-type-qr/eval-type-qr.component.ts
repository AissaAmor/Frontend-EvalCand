import { Component, OnInit,Output, EventEmitter  } from "@angular/core";
import { EvaluationService } from "../../../Services/evaluation.service";
import { FormGroup, FormControl,NgForm,FormsModule } from '@angular/forms';


@Component({
  selector: "app-eval-type-qr",
  templateUrl: "./eval-type-qr.component.html",
  styleUrls: ["./eval-type-qr.component.css"]
})

export class EvalTypeQRComponent implements OnInit {

    @Output() answer = new EventEmitter<string>();
  // response: FormArray;
    elapsedTime:number
    examTime: number = 1000;
  isQuestionCardShow: boolean = true;
  isQuestion: boolean = false;
  isStarted: boolean = true;
  chosenType: boolean
  listQR;
  tab;
  reponse: string = "";
  reponses = [];
  ques;
  listQuiz;
  index: number = 0;
  listChoice: any;
  List;
  isNextShow:boolean=true;
  listProject;
  ishidden;
 
  // Cette variable va contenir les choix de l'utilisateur lorsque il repond les question
  selectedChoice: string;

input(form){
  console.log(form);
  
}

  questionForm = new FormGroup({
    option: new FormControl(),
  })
  
  
  i = 0;
  j = 1;


    constructor(private evalService: EvaluationService) { }

    ngOnInit() {
      this.evalService.displayEval().subscribe(data => {
        console.log(data);
      });
    }

  startTimer(){
    this.evalService.timer = setInterval(() => this.elapsedTime = this.evalService.seconds++, 1000);  
  }

  next() {
    this.isStarted = false;
    this.isQuestionCardShow = false;
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

  nxt(){
    this.reponses.push(this.selectedChoice);
    this.selectedChoice = "";
    this.index = this.index + 1;
    this.List = this.tab[this.index].listChoice.split(";");
  }

  previous(index) {
    this.isStarted = false;
    this.isQuestionCardShow = false;
    index = index - 1;
  }

  displayEvaluation() {

    this.isStarted = false;
    this.isQuestionCardShow = false;
    this.isQuestion = false;
    this.evalService.displayEval().subscribe(data => {
      console.log(data);
      this.listQR = data;
      this.tab = this.listQR.qr;
      this.startTimer();
      console.log(this.tab[1].question);
    });
  }

  startQR() {
    this.isStarted = false;
    this.isQuestionCardShow = false;
    this.ishidden = true;
    this.isNextShow=false;
    this.displayEvaluation();
  }

  startQUIZ() {

    this.isQuestionCardShow = false;

       this.evalService.displayEval().subscribe(data => {
        console.log(data);
        this.listQuiz = data;
        this.tab = this.listQuiz.quiz;

        this.List = this.listQuiz.quiz;
        this.List = this.List[this.index].listChoice.split(";");
        this.startTimer();
        console.log(this.List[0]);
    });
  }
  startProject(){
    this.isStarted = false;
    this.isQuestionCardShow = false;
    this.isNextShow=false;
    this.ishidden = false;
    this.evalService.displayEval().subscribe(data => {
      console.log(data);
      this.listProject = data;
      this.tab = this.listProject.projet;
      // this.tab = this.tab[this.index].enonce;
      console.log(this.tab[0].enonce);
    });
  }

  radioChange(answer: string) {
    this.selectedChoice = answer;
    console.log("answer = " + answer);
   }


   submitTest(): void{
    
    this.evalService.submitTest(this.reponses).subscribe(data => {
      this.reponses.push(this.selectedChoice);
      console.log(data);
    });
  
  
  }

  displaySubmitButton(): boolean {
    return this.tab && this.index == this.tab.length - 1;
  }

  submitTest(): void {
    this.reponses.push(this.selectedChoice);
  }
  onSubmit(){

  }
}