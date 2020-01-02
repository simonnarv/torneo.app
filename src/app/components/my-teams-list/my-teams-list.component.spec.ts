import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTeamsListComponent } from './my-teams-list.component';

describe('MyTeamsListComponent', () => {
  let component: MyTeamsListComponent;
  let fixture: ComponentFixture<MyTeamsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTeamsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTeamsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
