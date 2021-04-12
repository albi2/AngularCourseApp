import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
const routes: Routes = [
  {path: 'myCourses', component: MainComponent},
  {path: 'allCourses', component: AllCoursesComponent},
  { path: '',   redirectTo: '/myCourses', pathMatch: 'full' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
