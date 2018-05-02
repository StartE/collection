import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeTricksComponent } from './code-tricks.component';

describe('CodeTricksComponent', () => {
  let component: CodeTricksComponent;
  let fixture: ComponentFixture<CodeTricksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeTricksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeTricksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
