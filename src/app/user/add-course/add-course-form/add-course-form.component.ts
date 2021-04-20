import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CourseService } from '../../../course.service';
import { Course} from '../../interfaces/course';
@Component({
  selector: 'app-add-course-form',
  templateUrl: './add-course-form.component.html',
  styleUrls: ['./add-course-form.component.css']
})
export class AddCourseFormComponent implements OnInit {
  c?: Course;
  isLinear: boolean = true;
  courseNameGroup: FormGroup;
  courseCreditsGroup: FormGroup;
  courseIdGroup: FormGroup;
  courseLecturerGroup: FormGroup;
  courseDescriptionGroup: FormGroup;
  courseStartDateGroup: FormGroup;
  @Output() addRequest = new EventEmitter<Course>();
  @Output() editRequest = new EventEmitter<Course>();
  @Output() edited = new EventEmitter<Course>();


  constructor(private _formBuilder: FormBuilder,
    private courseService: CourseService) { }

  ngOnInit() {
    this.courseNameGroup= this._formBuilder.group({
      courseName: ['', Validators.required]
    });
    this.courseCreditsGroup = this._formBuilder.group({
      courseCredits: ['', Validators.required]
    });
    this.courseIdGroup = this._formBuilder.group(
      {
        courseId: ['', Validators.required]
      }
    );
    this.courseLecturerGroup = this._formBuilder.group(
      {
        courseLecturer: ['', Validators.required]
      }
    );
    this.courseDescriptionGroup = this._formBuilder.group(
      {
        courseDescription: ['']
      }
    );
    this.courseStartDateGroup = this._formBuilder.group(
      {
        courseStartDate: [new Date().toISOString()]
      }
    );
  }

  editCourse() {
    let id = this.courseIdGroup.get('courseId').value as number;
    let courseName = this.courseNameGroup.get('courseName').value;
    let credits = this.courseCreditsGroup.get('courseCredits').value as number;
    let lecturer = this.courseLecturerGroup.get('courseLecturer').value; 
    let noOfStudents = 0;
    let noOfWeeks = 15;
    let description = this.courseDescriptionGroup.get('courseDescription').value;
    let startDate = this.courseStartDateGroup.get('courseStartDate').value;
    let lastUpdated = this.courseStartDateGroup.get('courseStartDate').value;

    this.courseService.editCourse(this.c._id,id, courseName, credits, lecturer,
      noOfStudents,startDate, noOfWeeks, lastUpdated, description).subscribe(res=> {
        console.log(res);
        this.isLinear = true;
        this.edited.emit({_id: this.c._id, id, courseName, credits, lecturer,
          noOfStudents,startDate, noOfWeeks, lastUpdated, description});
    });
  }

  setEditCourse(course: Course) {
    this.c = course;
    this.setEditValues();
  }

  setEditValues() {
    this.isLinear = false;
    this.courseNameGroup.setValue({courseName: this.c.courseName});
    this.courseCreditsGroup.setValue({courseCredits: this.c.credits});
    this.courseIdGroup.setValue({courseId: this.c.id});
    this.courseLecturerGroup.setValue({courseLecturer: this.c.lecturer});
    this.courseDescriptionGroup.setValue({courseDescription: this.c.description});
    this.courseStartDateGroup.setValue({ courseStartDate: this.c.startDate});
  }

  addCourse() {
    let id = this.courseIdGroup.get('courseId').value as number;
    let courseName = this.courseNameGroup.get('courseName').value;
    let credits = this.courseCreditsGroup.get('courseCredits').value as number;
    let lecturer = this.courseLecturerGroup.get('courseLecturer').value; 
    let noOfStudents = 0;
    let noOfWeeks = 15;
    let description = this.courseDescriptionGroup.get('courseDescription').value;
    let startDate = this.courseStartDateGroup.get('courseStartDate').value;
    let lastUpdated = this.courseStartDateGroup.get('courseStartDate').value;
    const course:Course = { 
      id, courseName, credits, lecturer, noOfWeeks,
      noOfStudents, description, startDate, lastUpdated
    }
    
    this.courseService.createCourse(id, courseName, credits, lecturer,
      noOfStudents,startDate, noOfWeeks, lastUpdated, description).subscribe(response => {
        this.addRequest.emit(course);
      });
  }
}
