import { Component, OnInit,EventEmitter,  Output, Input  } from '@angular/core';
import { Course} from '../../interfaces/course';
import { CourseService} from '../../../course.service';
@Component({
  selector: 'app-form-course-list',
  templateUrl: './form-course-list.component.html',
  styleUrls: ['./form-course-list.component.css']
})
export class FormCourseListComponent implements OnInit {
  displayedColumns: string[] = ['courseId', 'courseName', 'credits', 'lecturer', 'startDate', 'actions'];
  @Input() dataSource: Course[] = [];
  @Output() editRequested = new EventEmitter<Course>();
  @Output() removeRequest = new EventEmitter<Course>();

  constructor(private courseService: CourseService) { }

  ngOnInit() {
  }

  remove(c: Course) {
    this.courseService.deleteCourse(c._id).subscribe(res => {
      this.removeRequest.emit(res);
    })
  }

  requestEdit(course: Course) {
    this.editRequested.emit(course);
  }


  
}