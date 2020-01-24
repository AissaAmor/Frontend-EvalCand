import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-coach-profil',
  templateUrl: './coach-profil.component.html',
  styleUrls: ['./coach-profil.component.css']
})
export class CoachProfilComponent implements OnInit {

  CreateCoach: FormGroup;

  constructor() { }

  ngOnInit() {
    this.CreateCoach = new FormGroup({
      username:new FormControl (''),
      password: new FormControl (''),
    
  }, {
     
  });
}
}
