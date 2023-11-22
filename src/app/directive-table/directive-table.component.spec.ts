import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveTableComponent } from './directive-table.component';

describe('DirectiveTableComponent', () => {
  let component: DirectiveTableComponent;
  let fixture: ComponentFixture<DirectiveTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveTableComponent]
    });
    fixture = TestBed.createComponent(DirectiveTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
