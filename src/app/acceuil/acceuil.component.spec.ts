import { ComponentFixture, TestBed } from '@angular/core/testing';
import { acceuilComponent } from './acceuil.component';


describe('acceuilComponent', () => {
  let component: acceuilComponent;
  let fixture: ComponentFixture<acceuilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [acceuilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(acceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
