import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormValComponent } from './template-form-val.component';

describe('TemplateFormValComponent', () => {
  let component: TemplateFormValComponent;
  let fixture: ComponentFixture<TemplateFormValComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateFormValComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFormValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
