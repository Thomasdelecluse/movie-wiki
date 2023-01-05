import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularComponent } from './popular.component';

describe('ContactComponent', () => {
  let component: PopularComponent;
  let fixture: ComponentFixture<PopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});