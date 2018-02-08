import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GadgetOneComponent } from './gadget-one.component';

describe('GadgetOneComponent', () => {
  let component: GadgetOneComponent;
  let fixture: ComponentFixture<GadgetOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GadgetOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GadgetOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
