import { Component, OnInit } from "@angular/core";
import * as Chartist from "chartist";
import { Router } from "@angular/router";
import { EvaluationService } from "../../Services/evaluation.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, private evals: EvaluationService) {}
  allEval;
  ngOnInit() {
    if (!localStorage.getItem("token")) this.router.navigate(["/"]);
    this.evals.getAllEvaluation().subscribe(data => {
      console.log(data);
      this.allEval = data;
    });
  }
}

//   getAllEval() {
// });
//   }
// }
