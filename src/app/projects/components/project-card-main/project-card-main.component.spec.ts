import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCardMainComponent } from './project-card-main.component';

describe('ProjectCardMainComponent', () => {
  let component: ProjectCardMainComponent;
  let fixture: ComponentFixture<ProjectCardMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCardMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCardMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
