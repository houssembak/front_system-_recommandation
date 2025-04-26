import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollTo]',
  standalone:true
})
export class ScrollToDirective {
  @Input('appScrollTo') targetSelector!: string;

  @HostListener('click')
  onClick(): void {
    const targetElement = document.querySelector(this.targetSelector);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
