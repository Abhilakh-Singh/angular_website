import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GurugramProjectComponent } from './gurugram-project.component';

describe('GurugramProjectComponent', () => {
  let component: GurugramProjectComponent;
  let fixture: ComponentFixture<GurugramProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GurugramProjectComponent]
    });
    fixture = TestBed.createComponent(GurugramProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
