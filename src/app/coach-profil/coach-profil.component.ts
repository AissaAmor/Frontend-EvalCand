import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
// import { registerEscClick } from "Angular-Bootstrap-with-Material-Design/projects/angular-bootstrap-md/src/lib/free/utilities";

@Component({
  selector: "app-coach-profil",
  templateUrl: "./coach-profil.component.html",
  styleUrls: ["./coach-profil.component.css"]
})
export class CoachProfilComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nom: ["", [Validators.required, Validators.minLength(8)]],
      prenom: ["", [Validators.required, Validators.minLength(8)]],
      email: ["", [Validators.required, Validators.email]],
      specialite: ["", [Validators.required]],
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
