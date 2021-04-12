import { Component, OnInit } from '@angular/core';
import { faHome, faSearch, faPlusSquare, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  icons: any[] = [{icon: faHome, path:'/myCourses'}, {icon: faSearch, path: '/allCourses'}, {icon: faPlusSquare, path:'/'}];
  signOut: any = faSignOutAlt;
  constructor() { }

  ngOnInit() {

  }

}
