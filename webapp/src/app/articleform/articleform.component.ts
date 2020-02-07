import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {FormControl, Validators} from "@angular/forms";

import {ArticleService} from "../services/article.service";
import {AppComponent} from "../app.component";

export interface ArticleformData {
  title: string;
  content: string;
  rating: number;
  authorName: string;
  creationDate: string;
  category: string;
  imageURL: string;
}

@Component({
  selector: 'app-articleform',
  templateUrl: './articleform.component.html',
  styleUrls: ['./articleform.component.css']
})

export class ArticleformComponent implements OnInit {

  categories = ["Horror", "Action", "Adventure"];

  constructor(
    public dialogRef: MatDialogRef<ArticleformComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ArticleformData,
    private articleService: ArticleService,
    private appComponent: AppComponent) {
  }

  selectedCategory: string;

  titleControl = new FormControl(this.data.title, [Validators.required, Validators.minLength(3)]);
  imageURLControl = new FormControl(this.data.imageURL, [Validators.required]);
  contentControl = new FormControl(this.data.content, [Validators.required, Validators.minLength(200)]);

  getTitleErrorMessage() {
    return this.titleControl.hasError('required') ? 'You must enter a value' :
      this.titleControl.hasError('minlength') ? 'Your title has to be at least 3 characters long' :
        '';
  }

  getImageURLErrorMessage() {
    return this.imageURLControl.hasError('required') ? 'You must enter a value' : '';
  }

  getContentErrorMessage() {
    return this.contentControl.hasError('required') ? 'You must enter a value' :
      this.contentControl.hasError('minlength') ? 'Your review has to be at least 200 characters long' :
        '';
  }

  formIsValid() {
    return this.imageURLControl.valid && this.titleControl.valid && this.contentControl.valid
  }

  ngOnInit() {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    //TODO add authorName for current user
    // this.data.authorName = ...
    console.log("Submit");
    this.data.creationDate = Date.now().toString();
    this.articleService.postNewArticleToServer(this.data).then(() => {
        this.appComponent.addArticle(this.data).then(() => {
          setTimeout(() => this.dialogRef.close(),200)
        });
      }
    );
  }
}
