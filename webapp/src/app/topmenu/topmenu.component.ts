import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {ArticleformComponent} from "../articleform/articleform.component";
import {ArticlesComponent} from "../articles/articles.component";

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css']
})
export class TopmenuComponent implements OnInit {

  constructor(public dialog: MatDialog, public articlesComponent: ArticlesComponent) {
  }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ArticleformComponent, {
      width: '750px',
      data: {
        title: "",
        content: "",
        rating: 0,
        authorName: "",
        creationDate: "",
        category: "",
        imageURL: ""
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

}
