import {Component, OnInit} from '@angular/core';
import {ArticleService} from "./services/article.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isAdmin = false;

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
    this.articles = this.articleService.articles.filter((article) => article["_id"] != articleToDelete['_id'])
    this.articleService.getAllArticlesFromServer().then(() => {
      console.log("Updated")
    })
  }
}

