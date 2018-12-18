import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashComponent } from './dash.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('DashComponent', () => {
  let component: DashComponent;
  let fixture: ComponentFixture<DashComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should have as title 'dash'`, async(() => {
      fixture = TestBed.createComponent(DashComponent);
      component = fixture.debugElement.componentInstance;
      expect(component.title).toEqual('dash');
   }));

   it('should have a h1 tag of `dash works!`', () => {
    expect(de.query(By.css('p')).nativeElement.textContent).toEqual('dash works!');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
