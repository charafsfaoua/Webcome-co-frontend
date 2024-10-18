import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideSeaComponent } from './guide-sea.component';

describe('GuideSeaComponent', () => {
  let component: GuideSeaComponent;
  let fixture: ComponentFixture<GuideSeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuideSeaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuideSeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
