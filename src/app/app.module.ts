import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SidebarComponent } from './user/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainComponent } from './user/main/main.component';
import { CoursesComponentComponent } from './user/courses-component/courses-component.component';
import { CourseBlockComponent } from './user/courses-component/course-block/course-block.component';
import { AppRoutingModule } from './app-routing.module';
import { AllCoursesComponent } from './user/all-courses/all-courses.component';
import { SearchbarComponent } from './user/all-courses/searchbar/searchbar.component';
import { CoursesListComponent } from './user/all-courses/courses-list/courses-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatSliderModule } from '@angular/material/slider';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import {MatBadgeModule} from '@angular/material/badge';
import { AddCourseComponent } from './user/add-course/add-course.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatChipsModule} from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';
import { AddCourseFormComponent } from './user/add-course/add-course-form/add-course-form.component';
import { FormCourseListComponent } from './user/add-course/form-course-list/form-course-list.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CourseSidebarComponent } from './user/main/course-sidebar/course-sidebar.component';
import { StopClickDirective } from './user/directives/stop-click.directive';
import { StartPageComponent } from './start-page/start-page.component';
import { UserStarterComponent } from './user/user-starter/user-starter.component';
import {FormsModule} from '@angular/forms';
import { SigninSignupComponent } from './start-page/signin-signup/signin-signup.component';
import { PanelsComponent } from './start-page/panels/panels.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { WebRequestInterceptor } from './web-request.interceptor.';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,
    CoursesComponentComponent,
    CourseBlockComponent,
    AllCoursesComponent,
    SearchbarComponent,
    CoursesListComponent,
    AddCourseComponent,
    AddCourseFormComponent,
    FormCourseListComponent,
    CourseSidebarComponent,
    StopClickDirective,
    StartPageComponent,
    UserStarterComponent,
    SigninSignupComponent,
    PanelsComponent,
  
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule,  
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatBadgeModule,
    MatStepperModule,
    MatChipsModule,
    MatTableModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ MatDatepickerModule,
    MatNativeDateModule,
  {provide: HTTP_INTERCEPTORS, useClass: WebRequestInterceptor,
  multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
