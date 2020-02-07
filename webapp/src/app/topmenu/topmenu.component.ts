import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {ArticleformComponent} from "../articleform/articleform.component";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css']
})
export class TopmenuComponent implements OnInit {

  constructor(public dialog: MatDialog, public appComponent: AppComponent) {
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
//TODO change authorName to current user
    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

}
