import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../Services/auth.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-forget-password",
  templateUrl: "./forget-password.component.html",
  styleUrls: ["./forget-password.component.css"]
})
export class ForgetPasswordComponent implements OnInit {
  forgetPassword: FormGroup;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.forgetPassword = new FormGroup(
      {
        newPassword: new FormControl("", Validators.required),
        confirmPassword: new FormControl("", Validators.required)
      },
      {
        // validator: MustMatch("newPassword", "confirmPassword")
      }
    );
  }
}
