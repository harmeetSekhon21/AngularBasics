import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemochildComponent } from './demochild.component';

describe('DemochildComponent', () => {
  let component: DemochildComponent;
  let fixture: ComponentFixture<DemochildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemochildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemochildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
