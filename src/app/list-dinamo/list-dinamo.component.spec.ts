import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDinamoComponent } from './list-dinamo.component';

describe('ListDinamoComponent', () => {
  let component: ListDinamoComponent;
  let fixture: ComponentFixture<ListDinamoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDinamoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDinamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
