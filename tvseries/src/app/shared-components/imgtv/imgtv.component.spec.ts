import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgtvComponent } from './imgtv.component';

describe('ImgtvComponent', () => {
  let component: ImgtvComponent;
  let fixture: ComponentFixture<ImgtvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgtvComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgtvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
