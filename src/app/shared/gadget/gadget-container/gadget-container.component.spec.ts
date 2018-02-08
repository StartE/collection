import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GadgetContainerComponent } from './gadget-container.component';

describe('GadgetContainerComponent', () => {
  let component: GadgetContainerComponent;
  let fixture: ComponentFixture<GadgetContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GadgetContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GadgetContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
