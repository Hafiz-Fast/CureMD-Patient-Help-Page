import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleNavComponent } from './toggle-nav.component';

describe('ToggleNavComponent', () => {
  let component: ToggleNavComponent;
  let fixture: ComponentFixture<ToggleNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
