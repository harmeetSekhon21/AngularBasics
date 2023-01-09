import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoviewchildComponent } from './demoviewchild.component';

describe('DemoviewchildComponent', () => {
  let component: DemoviewchildComponent;
  let fixture: ComponentFixture<DemoviewchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoviewchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoviewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
