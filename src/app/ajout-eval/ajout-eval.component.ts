import { Component, OnInit } from "@angular/core";
import {
  MatAutocompleteSelectedEvent,
  MatAutocomplete
} from "@angular/material/autocomplete";
import { MatChipInputEvent } from "@angular/material/chips";
import {
  FormControl,
  Validators,
  FormGroup,
  FormControlName
} from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-ajout-eval",
  templateUrl: "./ajout-eval.component.html",
  styleUrls: ["./ajout-eval.component.css"]
})
export class AjoutEvalComponent implements OnInit {
  evalForm: FormGroup;
  Types = ["qr", "Projet", "QCM"];
  chosenType: string;
  constructor(private router: Router) {
    this.chosenType = "";
  }

  ngOnInit(): void {
    this.chosenType = "";
    this.evalForm = new FormGroup({
      titre: new FormControl("", [Validators.required]),
      etat: new FormControl("Activée", [Validators.required]),
      duree: new FormControl(0, [Validators.required])
    });
  }
  onChange(event) {
    this.chosenType = event.value;
    
  }
  getRetour(event) {
    console.log(event)
    this.chosenType = '';
  }
  
}


