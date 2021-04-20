import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  icons: any[] = [{icon: 'home', path:'/user/myCourses'}, {icon: 'manage_search', path: '/user/allCourses'}, {icon: 'add', path:'/user/add-course'}];
  constructor() { }

  ngOnInit() {

  }

}
