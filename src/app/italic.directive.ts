import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appItalic]'
})
export class ItalicDirective {

  constructor(private elem:ElementRef) { 
    elem.nativeElement.style.fontStyle = "italic";
  }

}
