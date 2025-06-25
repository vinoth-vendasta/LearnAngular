import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Learndirectives } from './learndirectives';

describe('Learndirectives', () => {
  let component: Learndirectives;
  let fixture: ComponentFixture<Learndirectives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Learndirectives]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Learndirectives);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
