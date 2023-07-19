import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarAlHeroeComponent } from './buscar-al-heroe.component';

describe('BuscarAlHeroeComponent', () => {
  let component: BuscarAlHeroeComponent;
  let fixture: ComponentFixture<BuscarAlHeroeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarAlHeroeComponent]
    });
    fixture = TestBed.createComponent(BuscarAlHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
