import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  pageTitle = "This is the page title";
  leadText = "Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.";

  coursesObservable: Observable<any[]>;

  constructor(public db: AngularFireDatabase ) { }

  ngOnInit() {
    this.coursesObservable = this.getCourses('/courses');
}

getCourses(listPath): Observable<any[]> {
  return this.db.list(listPath).valueChanges();
}

}
