import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Course} from './user/interfaces/course';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private webReqService: WebRequestService<any>) { }

  createCourse(id, courseName, credits, lecturer, noOfStudents,
    startDate, noOfWeeks, lastUpdated,description) {
      // Create a new course
      return this.webReqService.post('courses', {
        id, courseName, credits, lecturer, noOfStudents,
        startDate, noOfWeeks, lastUpdated, description
      } );
  }

  getMyCourses() {
    return this.webReqService.get("courses");
  }

  getCourses() {
    return this.webReqService.get("all-courses");
  }

  deleteCourse(_id: any ){
    return this.webReqService.delete(`courses/${_id}`);
  }

  editCourse(_id, id, courseName, credits, lecturer, noOfStudents,
    startDate, noOfWeeks, lastUpdated,description) {
      console.log(_id);
      return this.webReqService.patch(`courses/${_id}`,{
        id, courseName, credits, lecturer, noOfStudents,
        startDate, noOfWeeks, lastUpdated, description
      });
  }
  
  enroll(courseId: string) {
    return this.webReqService.patch(`users/${courseId}`, {});
  }
}
