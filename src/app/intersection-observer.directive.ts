import { Directive, ElementRef, EventEmitter, Output, OnInit } from '@angular/core';

@Directive({
  selector: '[appIntersectionObserver]',
  standalone:true
})
export class IntersectionObserverDirective implements OnInit {
  @Output() isVisible: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isVisible.emit(true); // Emit event when element is visible
          observer.unobserve(this.el.nativeElement); // Stop observing after the element is visible
        }
      });
    });

    observer.observe(this.el.nativeElement); // Start observing the element
  }
}