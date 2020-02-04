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


const routes: Routes =[
  {  path: '', redirectTo: 'dashboard', pathMatch: 'full'}, 
  { path: 'dashboard', component: DashboardComponent},  
  { path: 'ajouter-Eval', component: AjoutEvalComponent},
  { path: 'ajout-Candidat', component: UserProfileComponent},
  { path: 'coach-profile', component: CoachProfilComponent},
  { path: 'table-list', component: TableListComponent},
  { path: 'QR', component: QRComponent},
  { path: 'projet', component: ProjetComponent}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
