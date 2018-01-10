import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifelogComponent } from './lifelog.component';

describe('LifelogComponent', () => {
  let component: LifelogComponent;
  let fixture: ComponentFixture<LifelogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifelogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
