import { Component, OnInit, Input} from '@angular/core';
import { Course } from '../../interfaces/course';
import { CourseService } from '../../../course.service';
@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  @Input() courses: Course[];
  selected?: number | string;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
  }

  setSelected(id: number) {
    this.selected = id;
  }

  calculateWeeks(startDate: Date) {
    let currentDate: Date = new Date(); 
    let time = currentDate.getTime() - new Date(startDate).getTime();

    const diffWeeks = Math.floor(time/ (1000 * 60 * 60 * 24 * 7)); 

    if(diffWeeks < 0)
      return 'Not Started';
    else if(diffWeeks > 15)
      return 'Finished';
    else return 'Ongoing';
  }

  enroll(courseId: string) {
    console.log(courseId);
    this.courseService.enroll(courseId).subscribe(response => {
      console.log(response);
    })
  }
}
 