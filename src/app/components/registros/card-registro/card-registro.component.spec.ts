import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRegistroComponent } from './card-registro.component';

describe('CardRegistroComponent', () => {
  let component: CardRegistroComponent;
  let fixture: ComponentFixture<CardRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardRegistroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
