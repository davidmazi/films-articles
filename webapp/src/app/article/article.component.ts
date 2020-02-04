import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() title: string
  @Input() isAdmin: boolean
  @Input() content: string

  constructor() {
  }

  ngOnInit() {
  }

  getContent() {
    return this.content;
  }

  onDelete() {
    console.log("delete")
  }

}
