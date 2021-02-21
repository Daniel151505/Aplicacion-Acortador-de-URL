import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcortadorUrlComponent } from './acortador-url.component';

describe('AcortadorUrlComponent', () => {
  let component: AcortadorUrlComponent;
  let fixture: ComponentFixture<AcortadorUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcortadorUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcortadorUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
