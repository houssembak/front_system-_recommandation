import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Carousel, CarouselModule } from 'primeng/carousel';
import { NavbarComponent } from "../navbar/navbar.component";
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from "../footer/footer.component";
import { ScrollToDirective } from '../scroll-to.directive';
import { RouterModule } from '@angular/router';
import { CountUpDirective, CountUpModule } from 'ngx-countup';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [CarouselModule, NavbarComponent, CardModule, ButtonModule, FooterComponent, ScrollToDirective, RouterModule, CountUpModule,MatButtonModule,MatMenuModule],
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css'],
})
export class acceuilComponent implements AfterViewInit {
scrollToTop() {
throw new Error('Method not implemented.');
}
  experience = 0;
  projects = 0;
  countries = 0;
  experts = 0;
  clients = 0;

  targetExperience = 20;
  targetProjects = 1700;
  targetCountries = 35;
  targetExperts = 170;
  targetClients = 750;

  observer!: IntersectionObserver;

  @ViewChild('stats', { static: true }) statsSection!: ElementRef;
  @ViewChild('carousel') carousel!: Carousel;

  images = [
    'assets/image/rdv.jpg',
    'assets/image/pc.jpg',
    'assets/image/img1.jpg',
    'assets/image/ff.jpg',
    'assets/image/security.jpg',
  ];

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.restartAutoplay();
    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.startCounting();
        this.observer.disconnect(); // Stop observing after triggering
      }
    });

    this.observer.observe(this.statsSection.nativeElement);

    const backToTopButton = document.getElementById('back-to-top');

    if (backToTopButton) {
      this.renderer.listen('window', 'scroll', () => {
        if (window.scrollY > 300) {
          this.renderer.removeClass(backToTopButton, 'hidden');
        } else {
          this.renderer.addClass(backToTopButton, 'hidden');
        }
      });

      this.renderer.listen(backToTopButton, 'click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      });
    }
  }

  startCounting() {
    this.experience = this.targetExperience;
    this.projects = this.targetProjects;
    this.countries = this.targetCountries;
    this.experts = this.targetExperts;
    this.clients = this.targetClients;
  }

  title = 'Welcome to Home Page!';

  resetAutoplay() {
    this.restartAutoplay();
  }

  private restartAutoplay() {
    setTimeout(() => {
      if (this.carousel) {
        this.carousel.startAutoplay();
      }
    }, 1500);
  }
}