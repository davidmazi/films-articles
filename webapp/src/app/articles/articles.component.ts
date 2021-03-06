import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../services/article.service';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  isAdmin = true;

  articles = this.articleService.articles;

  constructor(private articleService: ArticleService) {
  }


  ngOnInit() {
    this.articleService.getAllArticlesFromServer().then(() => {
      this.articles = this.articleService.articles
    })
  }

  filterArticles(filter) {
    this.articles = filter.toLowerCase() == "all" ? this.articleService.articles : this.articleService.articles.filter((article) =>
      article.category.toLowerCase() == filter.toLowerCase()
    )
  }

  removeArticle(articleToDelete) {
    this.articles = this.articleService.articles.filter((article) => article["_id"] != articleToDelete['_id']);
    this.articleService.getAllArticlesFromServer().then(() => {
      console.log("Updated")
    })
  }

  addArticle(articleToAdd) {
    return new Promise((resolve) => {
      this.articles.unshift(articleToAdd);
      this.articleService.getAllArticlesFromServer().then(() => {
        console.log("Updated");
        resolve();
      })
    })
  }
}
