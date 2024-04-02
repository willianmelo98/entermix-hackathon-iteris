import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixcompComponent } from './mixcomp.component';

describe('MixcompComponent', () => {
  let component: MixcompComponent;
  let fixture: ComponentFixture<MixcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
