import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLocalNewsComponent } from './view-local-news.component';

describe('ViewLocalNewsComponent', () => {
  let component: ViewLocalNewsComponent;
  let fixture: ComponentFixture<ViewLocalNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewLocalNewsComponent]
    });
    fixture = TestBed.createComponent(ViewLocalNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
