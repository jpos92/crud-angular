import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../courses/models/Course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  list(): Course[] {
    return [
      { _id: '1', name: 'Angular', category: 'front-end' }
    ];
  }
}
