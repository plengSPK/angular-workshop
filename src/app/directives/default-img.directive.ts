import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';

@Directive({
  selector: '[appDefaultIMG]'
})
export class DefaultIMGDirective implements AfterViewInit {
  @Input('src') srcInput: any;
  constructor(public element:ElementRef) { }

  ngAfterViewInit():void {
    console.log(this.srcInput)
    if(this.srcInput == ''){ this.element.nativeElement.src = 'http://lamp.oja.go.th/MediaNewsIMG/default-image.png'; }
  }
}
