import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProductService, ServiceCategory, Product } from '../services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
})
export class AdminComponent implements OnInit {
  serviceCategories = Object.values(ServiceCategory);
  isEditMode = false;
  currentProductId: string | null = null;

  // Formulaire réactif avec typage fort
  productForm = this.fb.group({
    name: ['', Validators.required],
    code: ['', Validators.required],
    price: [0, [Validators.required, Validators.min(0)]],
    description: ['', Validators.required],
    imageUrl: ['', Validators.required],
    serviceCategory: [ServiceCategory.MICROSOFT_365, Validators.required],
    status: ['Disponible' as 'Disponible' | 'Non disponible', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // Charger les données si nécessaire
  }

  onSubmit() {
    if (this.productForm.valid) {
      const product = new Product(
        this.currentProductId || Date.now().toString(),
        this.productForm.value.name!,
        this.productForm.value.code!,
        this.productForm.value.price!,
        this.productForm.value.description!,
        this.productForm.value.imageUrl!,
        this.productForm.value.serviceCategory! as ServiceCategory,
        this.productForm.value.status! as 'Disponible' | 'Non disponible' // Typage fort
      );

      if (this.isEditMode) {
        this.productService.updateProduct(product);
      } else {
        this.productService.addProduct(product);
      }
      this.onReset();
    }
  }

  onReset() {
    this.productForm.reset({
      serviceCategory: ServiceCategory.MICROSOFT_365,
      status: 'Disponible'
    });
    this.isEditMode = false;
    this.currentProductId = null;
  }
}