import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {
  signupMode: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  toggle(n: boolean) {
    this.signupMode= !this.signupMode;
  }

  scroll($element: any) {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
