import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncPipesComponent } from './async-pipes.component';

describe('AsyncPipesComponent', () => {
  let component: AsyncPipesComponent;
  let fixture: ComponentFixture<AsyncPipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsyncPipesComponent]
    });
    fixture = TestBed.createComponent(AsyncPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
