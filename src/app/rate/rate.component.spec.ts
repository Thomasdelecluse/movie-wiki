import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateComponent } from './rate.component';

describe('ContactComponent', () => {
  let component: RateComponent;
  let fixture: ComponentFixture<RateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
