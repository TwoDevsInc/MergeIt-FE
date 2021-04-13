import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamNavItemMainComponent } from './team-nav-item-main.component';

describe('TeamNavItemMainComponent', () => {
  let component: TeamNavItemMainComponent;
  let fixture: ComponentFixture<TeamNavItemMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamNavItemMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamNavItemMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
