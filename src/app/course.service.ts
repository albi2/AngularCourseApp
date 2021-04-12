import { Injectable } from '@angular/core';
import { Course } from './interfaces/course';
import { COURSES} from './data/courses';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses: Course[] = [];
  constructor() { }

  getCourses(): Observable<Course[]> {
    const courses = of(COURSES);
    return courses;
  }

}
