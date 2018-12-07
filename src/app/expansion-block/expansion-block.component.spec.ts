import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionBlockComponent } from './expansion-block.component';

describe('ExpansionBlockComponent', () => {
  let component: ExpansionBlockComponent;
  let fixture: ComponentFixture<ExpansionBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpansionBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
