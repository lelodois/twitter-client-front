import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCoutriesComponent } from './top-coutries.component';

describe('TopCoutriesComponent', () => {
  let component: TopCoutriesComponent;
  let fixture: ComponentFixture<TopCoutriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopCoutriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCoutriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
