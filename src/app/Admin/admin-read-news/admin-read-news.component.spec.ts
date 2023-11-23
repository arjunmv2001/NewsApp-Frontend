import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReadNewsComponent } from './admin-read-news.component';

describe('AdminReadNewsComponent', () => {
  let component: AdminReadNewsComponent;
  let fixture: ComponentFixture<AdminReadNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminReadNewsComponent]
    });
    fixture = TestBed.createComponent(AdminReadNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
