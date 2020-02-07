import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input() category: string;

  colour: string;

  constructor() {
  }

  ngOnInit() {
    switch (this.category.toLowerCase()) {
      case "horror" :
        this.colour = "warn";
        break;
      case "action" :
        this.colour = "primary";
        break;
      case "adventure":
        this.colour = "accent";
        break;
    }
  }

}
