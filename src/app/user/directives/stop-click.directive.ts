import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appStopClick]'
})
export class StopClickDirective {

  @HostListener("click", ["$event"])
  public onClick(event: any): void
  {
      event.stopPropagation();
  }
}
