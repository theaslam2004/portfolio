import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GroceryCategoryPage } from './grocery-category.page';

describe('GroceryCategoryPage', () => {
  let component: GroceryCategoryPage;
  let fixture: ComponentFixture<GroceryCategoryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
