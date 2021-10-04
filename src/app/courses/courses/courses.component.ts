import { Component, OnInit } from '@angular/core';
import { Course } from './models/Course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    {_id: '1', name: 'Angular', category: 'front-end'}
  ];
  displayedColumns = ['name', 'category'];

  constructor() { }

  ngOnInit(): void {
  }

}
