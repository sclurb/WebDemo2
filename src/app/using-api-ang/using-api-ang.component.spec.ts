import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingApiAngComponent } from './using-api-ang.component';

describe('UsingApiAngComponent', () => {
  let component: UsingApiAngComponent;
  let fixture: ComponentFixture<UsingApiAngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingApiAngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingApiAngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
