import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHoursComponent } from './top-hours.component';

describe('TopHoursComponent', () => {
  let component: TopHoursComponent;
  let fixture: ComponentFixture<TopHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
