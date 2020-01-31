import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ToastrModule } from "ngx-toastr";
// import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRoutingModule } from "./app.routing";
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatIconModule,
  MatChipsModule,
  MatToolbarModule,
  MatBadgeModule,
  MatSidenavModule,
  MatListModule,
  MatGridListModule,
  MatNativeDateModule,
  MatTooltipModule,
  MatTableModule,
  MatPaginatorModule
} from "@angular/material";

import { AppComponent } from "./app.component";

import { QRComponent } from "./typeEval/qr/qr.component";
import { CoachProfilComponent } from "./coach-profil/coach-profil.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { listCandidatComponent } from "./listCandidat/listCandidat.component";
import { ajoutCandidatComponent } from "./ajoutCandidat/ajoutCandidat.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { AjoutEvalComponent } from "./ajout-eval/ajout-eval.component";

@NgModule({
  imports: [
    BrowserModule,
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
    MatChipsModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatIconModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    // FlexLayoutModule,
    MatToolbarModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
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
    listCandidatComponent,
    QRComponent,
    ajoutCandidatComponent,
    SignInComponent
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
