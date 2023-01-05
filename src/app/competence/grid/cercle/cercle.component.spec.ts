import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CercleComponent } from './cercle.component';

describe('CercleComponent', () => {
  let component: CercleComponent;
  let fixture: ComponentFixture<CercleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CercleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CercleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
