import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsUserComponent } from './as-user.component';

describe('AsUserComponent', () => {
  let component: AsUserComponent;
  let fixture: ComponentFixture<AsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
