import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[bgImg]', // Attribute selector
})
export class BgImgDirective implements OnChanges {
  constructor(private el: ElementRef) {}

  @Input('bgImg') path: string;
  @Input() contain: boolean;

  ngOnChanges(changes: any) {
    if (changes.path.currentValue !== changes.path.previousValue) {
      this.el.nativeElement.style.background = this.generateBgStyle();
    }
  }

  generateBgStyle() {
    const size = this.contain ? 'contain' : 'cover';
    return this.path ? `url("${this.path}") center center / ${size} no-repeat` : '#c9c9c9';
  }
}
