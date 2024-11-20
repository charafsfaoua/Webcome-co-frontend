import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermesConditionsComponent } from './termes-conditions.component';

describe('TermesConditionsComponent', () => {
  let component: TermesConditionsComponent;
  let fixture: ComponentFixture<TermesConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermesConditionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TermesConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
