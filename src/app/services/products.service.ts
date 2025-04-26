// product.service.ts
import { Injectable } from '@angular/core';
import { Product, ServiceCategory } from '../models/product.model';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private productsKey = 'products';
  private products$ = new BehaviorSubject<Product[]>(this.getFromStorage());

  constructor(private http: HttpClient) {}

  private getFromStorage(): Product[] {
    const products = localStorage.getItem(this.productsKey);
    return products ? JSON.parse(products) : [];
  }

  private saveToStorage(products: Product[]): void {
    localStorage.setItem(this.productsKey, JSON.stringify(products));
    this.products$.next(products);
  }

  getProductsByService(service: ServiceCategory): Observable<Product[]> {
    return this.products$.asObservable().pipe(
      map(products => products.filter(p => p.serviceCategory === service))
    );
  }

  addProduct(product: Product): void {
    const products = this.getFromStorage();
    products.push({ ...product, id: Date.now().toString() });
    this.saveToStorage(products);
  }

  updateProduct(updatedProduct: Product): void {
    const products = this.getFromStorage();
    const index = products.findIndex(p => p.id === updatedProduct.id);
    if (index > -1) {
      products[index] = updatedProduct;
      this.saveToStorage(products);
    }
  }

  deleteProduct(productId: string): void {
    const products = this.getFromStorage().filter(p => p.id !== productId);
    this.saveToStorage(products);
  }
}

export { ServiceCategory, Product };
