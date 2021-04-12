import { Component, OnInit } from '@angular/core';
import {  faPlusSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  addBtn: any = faPlusSquare;
  
  constructor() { }

  ngOnInit() {
  }

}
