import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideDevSiteComponent } from './guide-dev-site.component';

describe('GuideDevSiteComponent', () => {
  let component: GuideDevSiteComponent;
  let fixture: ComponentFixture<GuideDevSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuideDevSiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuideDevSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
