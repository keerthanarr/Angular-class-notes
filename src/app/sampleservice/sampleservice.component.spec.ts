import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleserviceComponent } from './sampleservice.component';

describe('SampleserviceComponent', () => {
  let component: SampleserviceComponent;
  let fixture: ComponentFixture<SampleserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
