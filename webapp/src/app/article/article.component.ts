import {Component, Input, OnInit} from '@angular/core';
import {ArticleService} from "../services/article.service";
import {Article} from "../models/article.model";
import {ArticlesComponent} from "../articles/articles.component";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() title: string;
  @Input() isAdmin: boolean;
  @Input() content: string;
  @Input() index: number;
  @Input() article: Article;

  constructor(private articleService: ArticleService, private articlesComponent: ArticlesComponent) {

  }

  ngOnInit() {
  }

  getContent() {
    return this.article.content;
  }

  onDelete(article: Article) {
    this.articleService.deleteArticleFromServer(article).then(() => this.articlesComponent.removeArticle(article));
  }

}
