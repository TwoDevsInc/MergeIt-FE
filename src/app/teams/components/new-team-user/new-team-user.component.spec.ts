import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTeamUserComponent } from './new-team-user.component';

describe('NewTeamUserComponent', () => {
  let component: NewTeamUserComponent;
  let fixture: ComponentFixture<NewTeamUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTeamUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTeamUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
