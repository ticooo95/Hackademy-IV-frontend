import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationPageComponent } from './organization-page.component';
import { SharedModule } from '../../shared/shared.module';

describe('OrganizationPageComponent', () => {
  let component: OrganizationPageComponent;
  let fixture: ComponentFixture<OrganizationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationPageComponent ],
      imports: [ SharedModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
//    fixture = TestBed.createComponent(OrganizationPageComponent);
//    component = fixture.componentInstance;
//    fixture.detectChanges();
  });

  it('should be created', () => {
//    expect(component).toBeTruthy();
  });
});
