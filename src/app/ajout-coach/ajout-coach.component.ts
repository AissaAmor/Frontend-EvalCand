import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-ajout-coach",
  templateUrl: "./ajout-coach.component.html",
  styleUrls: ["./ajout-coach.component.css"]
})
export class AjoutCoachComponent implements OnInit {
  registerForm: FormGroup;
  submitted;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ["", [Validators.required, Validators.minLength(8)]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      nom: ["", [Validators.required, Validators.minLength(8)]],
      prenom: ["", [Validators.required, Validators.minLength(8)]],
      email: ["", [Validators.required, Validators.email]],
      about: ["", [Validators.required]]
    });
  }
  addCoach() {
    if (this.registerForm) {
      this.submitted = true;
      console.log(this.submitted);

      console.log(this.registerForm.value);
      return;
    }
  }
}
