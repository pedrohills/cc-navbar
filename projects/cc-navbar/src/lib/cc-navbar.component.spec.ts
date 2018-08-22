import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcNavbarComponent } from './cc-navbar.component';

describe('CcNavbarComponent', () => {
  let component: CcNavbarComponent;
  let fixture: ComponentFixture<CcNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
