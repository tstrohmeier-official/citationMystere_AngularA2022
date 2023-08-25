import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrilleJeuComponent } from './grille-jeu.component';

describe('GrilleJeuComponent', () => {
  let component: GrilleJeuComponent;
  let fixture: ComponentFixture<GrilleJeuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrilleJeuComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GrilleJeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
