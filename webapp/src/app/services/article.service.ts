import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Article} from "../models/article.model";


@Injectable()
export class ArticleService {


  constructor(private httpClient: HttpClient) {

  }

  articles: Article[];

  getAllArticlesFromServer() {
    return new Promise((resolve, reject) => {

      this.httpClient.get<[Article]>('http://localhost:8080/api/articles')
        .subscribe(
          (response) => {
            this.articles = response["data"];
            console.log(response["data"]);
            resolve(this.articles)
          },
          (error) => {
            console.error((error));
            reject(error);
          }
        )
    })
  }

  deleteArticleFromServer(article: Article) {
    const url = `http://localhost:8080/api/deletearticle/${article["_id"]}`;
    return new Promise((resolve, reject) => {
      this.httpClient.delete(url).subscribe(
        (response) => {
          console.log(response);
          resolve();
        }, (error) => {
          console.error(error);
          reject();
        }
      )
    })
  }

  postNewArticleToServer(data) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return new Promise((resolve, reject) => {
      this.httpClient.post('http://localhost:8080/api/newarticle', data).subscribe(
        (response) => {
          resolve(response);
        }, (error) => {
          console.error(error);
          reject(error);
        }
      )
    })
  }

}
