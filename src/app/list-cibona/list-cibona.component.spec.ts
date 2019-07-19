import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCibonaComponent } from './list-cibona.component';

describe('ListCibonaComponent', () => {
  let component: ListCibonaComponent;
  let fixture: ComponentFixture<ListCibonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCibonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCibonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
