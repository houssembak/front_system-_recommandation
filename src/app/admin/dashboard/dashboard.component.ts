import { Component } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'; // Add this import for *ngIf directive

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, CommonModule], // Add CommonModule here
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  fermerSidebar() {
    document.querySelector('.sidebar-nav')?.classList.remove('open');
  }
  
  isSidebarOpen = true;
  showDashboard: boolean = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // Set initial state based on current route
    this.checkRoute(this.router.url);
    
    // Update showDashboard on route changes
    this.router.events.subscribe(() => {
      this.checkRoute(this.router.url);
    });
  }

  private checkRoute(url: string): void {
    // Check if the current route is the dashboard root or includes specific paths
    if (url === '/dashboard' || url === '/dashboard/') {
      this.showDashboard = true;
    } else if (url.includes('/dashboard/products1') || 
              url.includes('/dashboard/Formations') || 
              url.includes('/dashboard/Utilisateurs')) {
      this.showDashboard = false;
    } else {
      this.showDashboard = true;
    }
  }
}