import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAdmin = false;

  articles = [
    { title: "jumanji", content: "awesome" },
    { title: "bob", content: "wow" },
    { title: "transformers", content: "incredible" }
  ];

  constructor(private http: HttpClient) {
  }

  getArticles(){
    this.http
  }
}

