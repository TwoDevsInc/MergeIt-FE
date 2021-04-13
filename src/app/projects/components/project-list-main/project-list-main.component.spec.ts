import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectListMainComponent } from './project-list-main.component';

describe('ProjectListMainComponent', () => {
  let component: ProjectListMainComponent;
  let fixture: ComponentFixture<ProjectListMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectListMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectListMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
