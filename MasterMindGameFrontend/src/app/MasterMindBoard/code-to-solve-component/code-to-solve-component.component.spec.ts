import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeToSolveComponentComponent } from './code-to-solve-component.component';

describe('CodeToSolveComponentComponent', () => {
  let component: CodeToSolveComponentComponent;
  let fixture: ComponentFixture<CodeToSolveComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeToSolveComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeToSolveComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
