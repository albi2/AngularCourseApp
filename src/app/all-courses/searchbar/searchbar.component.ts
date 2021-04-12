import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Output, EventEmitter } from '@angular/core';
import { CourseService } from '../../course.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  searchIcon: any = faSearch;
  @Output() searchEvent = new EventEmitter<string>();

  constructor( ) { }

  ngOnInit() {

  }

  search(value: string) {
    this.searchEvent.emit(value);
  }

}
