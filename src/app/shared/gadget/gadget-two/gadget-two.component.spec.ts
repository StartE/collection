import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GadgetTwoComponent } from './gadget-two.component';

describe('GadgetTwoComponent', () => {
  let component: GadgetTwoComponent;
  let fixture: ComponentFixture<GadgetTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GadgetTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GadgetTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
