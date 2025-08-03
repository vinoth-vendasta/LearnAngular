import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCom } from './crud-com';

describe('CrudCom', () => {
  let component: CrudCom;
  let fixture: ComponentFixture<CrudCom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudCom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudCom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
