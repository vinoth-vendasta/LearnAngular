import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsLearn } from './signals-learn';

describe('SignalsLearn', () => {
  let component: SignalsLearn;
  let fixture: ComponentFixture<SignalsLearn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsLearn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsLearn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
