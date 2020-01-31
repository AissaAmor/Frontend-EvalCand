import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ToastrModule } from "ngx-toastr";
import { AjoutEvalComponent } from "./ajout-eval/ajout-eval.component";


import { AppRoutingModule } from "./app.routing";
import { MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule, 
  MatFormFieldModule, MatInputModule,MatIconModule, MatRadioModule, MatSelectModule, MatSliderModule, 
  MatSlideToggleModule, MatChipsModule } from '@angular/material';

import { AppComponent } from "./app.component";

import { QRComponent } from './typeEval/qr/qr.component';
import { CoachProfilComponent } from './coach-profil/coach-profil.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableListComponent } from './table-list/table-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProjetComponent } from './typeEval/projet/projet.component';
import { LanguageComponent } from './typeEval/qcm/language.component';
import { CodageComponent } from './typeEval/codage/codage.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    MatAutocompleteModule,
     MatButtonModule,
     MatCheckboxModule,
     MatDatepickerModule,
     MatFormFieldModule,
     MatInputModule,
     MatIconModule,
     MatChipsModule,
     MatRadioModule,
     MatSelectModule,
     MatSliderModule,
     MatSlideToggleModule,  
    ReactiveFormsModule ,
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    QRComponent,
    AjoutEvalComponent,
    CoachProfilComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    TableListComponent,
    QRComponent,
    UserProfileComponent,
    ProjetComponent,
    LanguageComponent,
    CodageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
