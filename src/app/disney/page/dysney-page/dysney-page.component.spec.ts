import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DysneyPageComponent } from './dysney-page.component';

describe('DysneyPageComponent', () => {
  let component: DysneyPageComponent;
  let fixture: ComponentFixture<DysneyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DysneyPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DysneyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
