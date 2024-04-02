import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassaTemposComponent } from './passa-tempos.component';

describe('PassaTemposComponent', () => {
  let component: PassaTemposComponent;
  let fixture: ComponentFixture<PassaTemposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassaTemposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassaTemposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
