// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { PipeComponent } from './timer.component';

// describe('PipeComponent', () => {
//   let component: PipeComponent;
//   let fixture: ComponentFixture<PipeComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ PipeComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(PipeComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
import { TimerPipe } from './timer.component';

describe('TimerPipe', () => {
  it('create an instance', () => {
    const pipe = new TimerPipe();
    expect(pipe).toBeTruthy();
  });
});
