import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective {
  @HostBinding('style.color') couleurTexte: string | null = null;

  @HostListener('window:keyup', ['$event']) windowKeyUp($event: KeyboardEvent) {
    console.log($event);
    console.log($event.key);

    switch ($event.key) {
      case 'ArrowUp':
        this.couleurTexte = 'red';
        break;
      case 'ArrowRight':
        this.couleurTexte = 'blue';
        break;
      case 'ArrowDown':
        this.couleurTexte = 'green';
        break;
      case 'ArrowLeft':
        this.couleurTexte = 'purple';
        break;
      default:
        this.couleurTexte = 'black';
        break;
    }
  }

  constructor(private el: ElementRef<HTMLParagraphElement>) {
    this.el.nativeElement.style.fontWeight = 'bold';
  }
}
