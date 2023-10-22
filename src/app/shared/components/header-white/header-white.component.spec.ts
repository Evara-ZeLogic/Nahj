import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWhiteComponent } from './header-white.component';

describe('HeaderWhiteComponent', () => {
  let component: HeaderWhiteComponent;
  let fixture: ComponentFixture<HeaderWhiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderWhiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
