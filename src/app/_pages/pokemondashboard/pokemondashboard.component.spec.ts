import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemondashboardComponent } from './pokemondashboard.component';

describe('PokemondashboardComponent', () => {
  let component: PokemondashboardComponent;
  let fixture: ComponentFixture<PokemondashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemondashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemondashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
