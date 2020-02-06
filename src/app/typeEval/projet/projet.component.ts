import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {
projet : FormArray;
@Input() object: any;
  @Output() retour= new EventEmitter<string>();
tp = new FormGroup ({
    projet : new FormArray([  
      new FormGroup({    
        enonce : new FormControl('',[Validators.required]),
        lienGit : new FormControl('',[Validators.required])
      })
    ])
});




  constructor(private router : Router ) { }
  addPrj(){
    this.projet = this.tp.get('projet') as FormArray;
    this.projet.push(  new FormGroup({
      enonce: new FormControl('', [Validators.required]),
      lienGit : new FormControl('',[Validators.required])
    }));   
    console.log(this.tp.value) 
  }
  ngOnInit() {
  }
  removePrj(index: number){
    this.projet = this.tp.get('projet') as FormArray;
    this.projet.removeAt(index);
  }
  enregistrer(){
    
  }
  Return(){
    this.retour.emit('retour');
  }
}
