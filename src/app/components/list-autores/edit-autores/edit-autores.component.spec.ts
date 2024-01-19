import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAutoresComponent } from './edit-autores.component';

describe('EditAutoresComponent', () => {
  let component: EditAutoresComponent;
  let fixture: ComponentFixture<EditAutoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditAutoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditAutoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
