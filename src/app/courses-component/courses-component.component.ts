import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from '../interfaces/course';

@Component({
  selector: 'app-courses-component',
  templateUrl: './courses-component.component.html',
  styleUrls: ['./courses-component.component.css']
})
export class CoursesComponentComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.courseService.getCourses()
    .subscribe(courses => this.courses = courses);
  }
}
