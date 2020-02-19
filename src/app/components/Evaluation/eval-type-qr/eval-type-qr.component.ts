import { Component, OnInit } from "@angular/core";
import { EvaluationService } from "../../../Services/evaluation.service";

@Component({
  selector: "app-eval-type-qr",
  templateUrl: "./eval-type-qr.component.html",
  styleUrls: ["./eval-type-qr.component.css"]
})
export class EvalTypeQRComponent implements OnInit {
  listQR;
  i = 0;
  j = 1;
  constructor(private evalService: EvaluationService) {}

  ngOnInit() {}
  next() {
    this.i = this.i + 1;
    this.j = this.j + 1;
  }
  previous(i, j) {
    this.i = this.i - 1;
    this.j = this.j - 1;
  }

  displayEvaluation(id) {
    this.evalService.displayEval(68).subscribe(data => {
      console.log(data);
      this.listQR = data;
    });
  }
}
