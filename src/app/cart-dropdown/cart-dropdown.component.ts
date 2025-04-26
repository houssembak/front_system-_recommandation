import { Component } from '@angular/core';
interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  type: 'product' | 'training';
  image?: string;
}
@Component({
  selector: 'app-cart-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './cart-dropdown.component.html',
  styleUrl: './cart-dropdown.component.css'
})
export class CartDropdownComponent {
  cartItems: CartItem[] = [
    {
      id: 1,
      name: 'Bitdefender Internet Security',
      description: '1 an - 1 poste',
      price: 8000,
      quantity: 1,
      type: 'product',
      image: 'assets/products/bitdefender.jpg'
    },
    {
      id: 2,
      name: 'Formation Power BI Pro',
      description: 'Certification incluse',
      price: 1200,
      quantity: 2,
      type: 'training'
    },
    {
      id: 3,
      name: 'SQL Server 2022 Enterprise',
      description: 'Licence complète',
      price: 10500,
      quantity: 1,
      type: 'product',
      image: 'assets/products/sql-server.jpg'
    }
  ];

  increaseQuantity(item: CartItem) {
    item.quantity++;
  }

  decreaseQuantity(item: CartItem) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  removeItem(item: CartItem) {
    this.cartItems = this.cartItems.filter(i => i.id !== item.id);
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}
