import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GadgetThreeComponent } from './gadget-three.component';

describe('GadgetThreeComponent', () => {
  let component: GadgetThreeComponent;
  let fixture: ComponentFixture<GadgetThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GadgetThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GadgetThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
