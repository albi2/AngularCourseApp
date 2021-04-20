import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../../interfaces/course';

@Component({
  selector: 'app-course-sidebar',
  templateUrl: './course-sidebar.component.html',
  styleUrls: ['./course-sidebar.component.css']
})
export class CourseSidebarComponent implements OnInit {
  @Input() course: Course;
  
  constructor() { }

  ngOnInit() {
  }

}
