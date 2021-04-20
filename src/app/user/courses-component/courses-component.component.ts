import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CourseService } from '../../course.service';
import { Course } from '../interfaces/course';

@Component({
  selector: 'app-courses-component',
  templateUrl: './courses-component.component.html',
  styleUrls: ['./courses-component.component.css']
})
export class CoursesComponentComponent implements OnInit {
  courses: Course[] = [];
  @Output() selected = new EventEmitter<Course>();

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.courseService.getMyCourses()
    .subscribe(courses => this.courses = courses);
  }

  selectCourse(course: Course) {
    this.selected.emit(course);
  }
}
