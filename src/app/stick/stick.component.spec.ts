import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickComponent } from './stick.component';

describe('StickComponent', () => {
  let component: StickComponent;
  let fixture: ComponentFixture<StickComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StickComponent]
    });
    fixture = TestBed.createComponent(StickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
