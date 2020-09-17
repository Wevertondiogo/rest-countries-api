import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsCoutriesComponent } from './cards-coutries.component';

describe('CardsCoutriesComponent', () => {
  let component: CardsCoutriesComponent;
  let fixture: ComponentFixture<CardsCoutriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsCoutriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsCoutriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
