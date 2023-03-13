import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FulldetailsComponent } from './fulldetails.component';

describe('FulldetailsComponent', () => {
  let component: FulldetailsComponent;
  let fixture: ComponentFixture<FulldetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FulldetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FulldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
