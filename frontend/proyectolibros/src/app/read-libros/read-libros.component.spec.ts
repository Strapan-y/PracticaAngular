import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadLibrosComponent } from './read-libros.component';

describe('ReadLibrosComponent', () => {
  let component: ReadLibrosComponent;
  let fixture: ComponentFixture<ReadLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadLibrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
