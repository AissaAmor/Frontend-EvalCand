import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"]
})
export class UserProfileComponent implements OnInit {
  candidatForm: FormGroup;
  click = false;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.candidatForm = this.formBuilder.group({
      nom: ["", [Validators.required, Validators.minLength(8)]],
      prenom: ["", [Validators.required, Validators.minLength(8)]],
      emailCandidat: ["", [Validators.required, Validators.email]],
      niveau: ["", [Validators.required]]
    });
  }
  addCandidat() {
    this.click = true;
    if (this.candidatForm) {
      console.log(this.click);
      console.log(this.candidatForm.value);
      return;
    }
  }
}
