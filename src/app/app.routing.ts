import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { QRComponent } from "./typeEval/qr/qr.component";

import { AjoutEvalComponent } from "./ajout-eval/ajout-eval.component";
import { ajoutCandidatComponent } from "./ajoutCandidat/ajoutCandidat.component";
import { CoachProfilComponent } from "./coach-profil/coach-profil.component";
import { listCandidatComponent } from "./listCandidat/listCandidat.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SignInComponent } from "./sign-in/sign-in.component";

const routes: Routes = [
  { path: "", redirectTo: "sign-in", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "ajouter-Eval", component: AjoutEvalComponent },
  { path: "ajout-Candidat", component: ajoutCandidatComponent },
  { path: "coach-profile", component: CoachProfilComponent },
  { path: "list-candidat", component: listCandidatComponent },
  { path: "sign-in", component: SignInComponent },
  { path: "QR", component: QRComponent }
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
