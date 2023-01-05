import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceComponent } from './competence.component';

describe('CompetenceComponent', () => {
  let component: CompetenceComponent;
  let fixture: ComponentFixture<CompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
