import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilitiessearchdetailsComponent } from './abilitiessearchdetails.component';

describe('AbilitiessearchdetailsComponent', () => {
  let component: AbilitiessearchdetailsComponent;
  let fixture: ComponentFixture<AbilitiessearchdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbilitiessearchdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbilitiessearchdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
