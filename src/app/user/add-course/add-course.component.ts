import { Component, OnInit, ViewChild } from '@angular/core';
import { AddCourseFormComponent } from './add-course-form/add-course-form.component';
import { Course} from '../interfaces/course';
import { CourseService } from '../../course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})

export class AddCourseComponent implements OnInit {
  @ViewChild(AddCourseFormComponent,{static: false}) private formComponent: AddCourseFormComponent;
  data: Course[] = [];
  constructor(private courseService: CourseService) { }

  ngOnInit() {
      this.getCourses();
  }

  push(course: Course) {
    // The data changes but component does not get rerendered because we need the reference to change.
    // They are same reference but with added data
    this.data = [...this.data, course];
  }

  remove(course: Course) {
    this.data = this.data.filter(c => c._id !== course._id);
  }

  edit(course: Course) {
    let index: number = this.data.findIndex(c => c._id == course._id);
    let newData: Course[] = [...this.data];
    newData[index] = course;
    this.data = newData;
  }

  editReqReceived(course: Course) {
    this.formComponent.setEditCourse(course);
  }

  getCourses() {
    this.courseService.getCourses().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }
}
