import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Course} from '../interfaces/course';


@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})

export class AllCoursesComponent implements OnInit {
  courses: Course[] = [];
  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getData("");
  }

  getData(searchValue: string) {
    console.log(searchValue);
    this.courseService.getCourses().subscribe(courses => {
     if(searchValue === ""){
        this.courses = courses;
     }
     else {
      this.courses = courses;
     }
  });
  }
}
