import { Component, OnInit, Input } from '@angular/core';
import {FormControl,Validators, FormGroup, FormControlName, FormArray} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QRComponent implements OnInit {
skills: FormArray;
@Input()object: any;
tp = new FormGroup({
  skills: new FormArray([
    new FormGroup({
    question: new FormControl('',[Validators.required]),
    // response : new FormControl('')
  })
  ])
});

  constructor() { }
  addQR(){
    this.skills = this.tp.get('skills') as FormArray;
    this.skills.push(  new FormGroup({
      question: new FormControl('', [Validators.required]),
      // response : new FormControl('')
    }));   
    console.log(this.tp.value) 
  }

  
  ngOnInit() {
  console.log(this.tp)
  }

  isShown: boolean = false ; // hidden by default


  // toggleShow() {
  
  // this.isShown = ! this.isShown;
  // this.skills.push(new FormControl(''));
  // }

  
  removeSkill(index: number)  {
    this.skills = this.tp.get('skills') as FormArray;
    this.skills.removeAt(index);
  }

  enregistrer(){
    const obj = {
      Titre: new FormControl('', [Validators.required]),
      Etat: new FormControl('Activée', [Validators.required]),
      Duree: new FormControl(0, [Validators.required]),
      qr: this.tp.value.skills,
      
    }
    console.log(this.object.value);
  }
}
