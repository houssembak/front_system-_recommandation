import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../navbar/navbar.component";
import { FooterComponent } from "../../footer/footer.component";
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: '1',
      name: 'Bitdefender Internet Security',
      description: 'Antivirus complet pour 1 poste',
      price: 8000,
      availability: ['Tunis', 'Sousse'],
      features: ['Contrôle parental', 'Pare-feu']
    },
    // Add more products as needed
  ];
}