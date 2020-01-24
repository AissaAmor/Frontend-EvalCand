import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCoachComponent } from './ajout-coach.component';

describe('AjoutCoachComponent', () => {
  let component: AjoutCoachComponent;
  let fixture: ComponentFixture<AjoutCoachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutCoachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
