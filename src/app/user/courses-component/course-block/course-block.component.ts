import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../interfaces/course';

@Component({
  selector: 'app-course-block',
  templateUrl: './course-block.component.html',
  styleUrls: ['./course-block.component.css']
})
export class CourseBlockComponent implements OnInit {
  @Input() course: Course;
  @Output() courseSelected = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() {
  }

  selectCourse(course: Course) {
    this.courseSelected.emit(course);
  }
}
