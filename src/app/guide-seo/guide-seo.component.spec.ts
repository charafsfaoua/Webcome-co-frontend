import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideSeoComponent } from './guide-seo.component';

describe('GuideSeoComponent', () => {
  let component: GuideSeoComponent;
  let fixture: ComponentFixture<GuideSeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuideSeoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuideSeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
