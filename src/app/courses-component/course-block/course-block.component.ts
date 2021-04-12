import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../interfaces/course';

@Component({
  selector: 'app-course-block',
  templateUrl: './course-block.component.html',
  styleUrls: ['./course-block.component.css']
})
export class CourseBlockComponent implements OnInit {
  @Input() course: Course;
  constructor() { }

  ngOnInit() {
  }

}
