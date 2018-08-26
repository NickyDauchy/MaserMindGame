import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicRowComponentComponent } from './basic-row-component.component';

describe('BasicRowComponentComponent', () => {
  let component: BasicRowComponentComponent;
  let fixture: ComponentFixture<BasicRowComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicRowComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicRowComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
