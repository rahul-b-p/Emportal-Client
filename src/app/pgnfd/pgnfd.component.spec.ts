import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgnfdComponent } from './pgnfd.component';

describe('PgnfdComponent', () => {
  let component: PgnfdComponent;
  let fixture: ComponentFixture<PgnfdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PgnfdComponent]
    });
    fixture = TestBed.createComponent(PgnfdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
