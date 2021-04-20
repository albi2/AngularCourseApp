import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './user/main/main.component';
import { AllCoursesComponent } from './user/all-courses/all-courses.component';
import { AddCourseComponent } from './user/add-course/add-course.component';
import { StartPageComponent } from './start-page/start-page.component';
import { UserStarterComponent} from './user/user-starter/user-starter.component';
import { CourseSidebarComponent } from './user/main/course-sidebar/course-sidebar.component';
const routes: Routes = [
  {path: 'user', component: UserStarterComponent,
  children : [
    {path: 'myCourses', 
    component: MainComponent},
    {path: 'allCourses', component: AllCoursesComponent},
    { path: 'add-course', component: AddCourseComponent},
    { path: '',   redirectTo: '/user/myCourses', pathMatch: 'full' }
  ]},
  { path: 'home', component: StartPageComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
