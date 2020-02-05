import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
@Output() retour= new EventEmitter<string>();
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
    
      qr: this.tp.value.skills,
      Titre: this.object.value.Titre,
      Etat: this.object.value.Etat,
      Duree:this.object.value.Duree,

    }
    console.log(this.object.value);
    
  }
  Return(){
    this.retour.emit('retour');
  }
}
