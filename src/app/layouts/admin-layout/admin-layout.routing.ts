import { Routes } from "@angular/router";

import { DashboardComponent } from "../../dashboard/dashboard.component";
import { UserProfileComponent } from "../../user-profile/user-profile.component";
import { TableListComponent } from "../../table-list/table-list.component";
import { CoachProfilComponent } from "../../coach-profil/coach-profil.component";
import { AjoutCoachComponent } from "../../ajout-coach/ajout-coach.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "user-profile", component: UserProfileComponent },
  { path: "table-list", component: TableListComponent },
  { path: "coach-profile", component: CoachProfilComponent },
  { path: "ajout-coach", component: AjoutCoachComponent }
];
