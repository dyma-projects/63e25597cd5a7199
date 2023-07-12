import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective {
  @HostListener('window:keyup', ['$event']) windowKeyUp($event: KeyboardEvent) {
    console.log($event);
    console.log($event.key);

    switch ($event.key) {
      case 'ArrowUp':
        this.el.nativeElement.style.color = 'red';
        break;
      case 'ArrowRight':
        this.el.nativeElement.style.color = 'blue';
        break;
      case 'ArrowDown':
        this.el.nativeElement.style.color = 'green';
        break;
      case 'ArrowLeft':
        this.el.nativeElement.style.color = 'purple';
        break;
      default:
        this.el.nativeElement.style.color = 'black';
        break;
    }
  }

  constructor(private el: ElementRef<HTMLParagraphElement>) {
    this.el.nativeElement.style.fontWeight = 'bold';
  }
}
