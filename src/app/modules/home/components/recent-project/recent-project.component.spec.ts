import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentProjectComponent } from './recent-project.component';

describe('RecentProjectComponent', () => {
  let component: RecentProjectComponent;
  let fixture: ComponentFixture<RecentProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
