import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainComponent } from './main/main.component';
import { CoursesComponentComponent } from './courses-component/courses-component.component';
import { CourseBlockComponent } from './courses-component/course-block/course-block.component';
import { AppRoutingModule } from './app-routing.module';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { SearchbarComponent } from './all-courses/searchbar/searchbar.component';
import { CoursesListComponent } from './all-courses/courses-list/courses-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,
    CoursesComponentComponent,
    CourseBlockComponent,
    AllCoursesComponent,
    SearchbarComponent,
    CoursesListComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
