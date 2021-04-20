import { Component, Input, OnInit } from '@angular/core';
import {  faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { Course } from '../interfaces/course';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('filterAnimation', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(100%)' }),
        animate('300ms ease-in-out')
      ]),
      transition('* => void', [
        animate(200, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class MainComponent implements OnInit {
  addBtn: any = faPlusSquare;
  selectedCourse: Course;

  constructor() { }

  ngOnInit() {
  }

  setSelected(course: Course) {
    this.selectedCourse = course;
  }

}
