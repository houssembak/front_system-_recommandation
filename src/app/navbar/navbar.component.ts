import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

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
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule, MatMenuModule, MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userName: string | null = null;
  isLoggedIn: boolean = false;
  
  // Dropdown visibility
  isDropdownVisible: boolean = false;
  activeSubMenu: string | null = null;

  // Cart functionality
  showCart = false;
  cartItemCount = 3;
  
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
      name: 'Kaspersky Plus',
      description: 'Licence complète',
      price: 10500,
      quantity: 1,
      type: 'product',
      image: 'assets/products/kaspersky-plus.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      this.userName = parsedUser;
      this.isLoggedIn = true;
    }
  }
  
  // Toggle submenu function
  toggleSubMenu(menuName: string): void {
    if (this.activeSubMenu === menuName) {
      this.activeSubMenu = null; // Close if already open
    } else {
      this.activeSubMenu = menuName; // Open the clicked menu
    }
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.userName = null;
    window.location.reload();
    this.isLoggedIn = false;
    this.userName = null;
  }

  // Services dropdown methods
  showDropdown(): void {
    this.isDropdownVisible = true;
  }

  hideDropdown(): void {
    this.isDropdownVisible = false;
  }

  // Cart methods
  toggleCart(event: Event): void {
    event.preventDefault();
    this.showCart = !this.showCart;
  }

  increaseQuantity(item: CartItem): void {
    item.quantity++;
    this.updateCartCount();
  }

  decreaseQuantity(item: CartItem): void {
    if (item.quantity > 1) {
      item.quantity--;
      this.updateCartCount();
    }
  }

  removeItem(item: CartItem): void {
    this.cartItems = this.cartItems.filter(i => i.id !== item.id);
    this.updateCartCount();
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  private updateCartCount(): void {
    this.cartItemCount = this.cartItems.reduce((count, item) => count + item.quantity, 0);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;

    // Close cart if clicking outside
    if (!target.closest('.action-btn[title="Cart"]') && !target.closest('.cart-dropdown')) {
      this.showCart = false;
    }

    // Close services dropdown if clicking outside
    if (!target.closest('.services-dropdown-trigger') && !target.closest('.services-dropdown')) {
      this.isDropdownVisible = false;
    }
  }
}