import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProgComponent } from './list-prog.component';

describe('ListProgComponent', () => {
  let component: ListProgComponent;
  let fixture: ComponentFixture<ListProgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
