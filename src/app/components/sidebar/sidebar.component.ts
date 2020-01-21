import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: "/dashboard", title: "Dashboard", icon: "design_app", class: "" },
  {
    path: "/user-profile",
    title: "ajout Candidat",
    icon: "users_single-02",
    class: ""
  },
  {
    path: "/coach-profile",
    title: "Coach profile",
    icon: "design_bullet-list-67",
    class: ""
  },
  {
    path: "/table-list",
    title: "Table List",
    icon: "design_bullet-list-67",
    class: ""
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
