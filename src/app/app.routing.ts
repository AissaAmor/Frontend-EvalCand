
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AjoutEvalComponent } from './ajout-eval/ajout-eval.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CoachProfilComponent } from './coach-profil/coach-profil.component';
import { TableListComponent } from './table-list/table-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { QRComponent } from './typeEval/qr/qr.component';
import { ProjetComponent } from './typeEval/projet/projet.component';


import { ajoutCandidatComponent } from "./ajoutCandidat/ajoutCandidat.component";
import { listCandidatComponent } from "./listCandidat/listCandidat.component";
import { StructureComponent } from "./structure/structure.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { EvalCandidatComponent } from "./eval-candidat/eval-candidat.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "sign-in",
    pathMatch: "full"
  },
  { path: "sign-in", component: SignInComponent },
  { path: "eval-candidat", component: EvalCandidatComponent },
  {
    path: "",
    component: StructureComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "ajouter-Eval", component: AjoutEvalComponent },
      { path: "ajout-Candidat", component: ajoutCandidatComponent },
      { path: "coach-profile", component: CoachProfilComponent },
      { path: "list-candidat", component: listCandidatComponent },
      { path: 'QR', component: QRComponent},
      { path: 'projet', component: ProjetComponent}

    ]
  }
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
