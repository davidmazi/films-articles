import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ArticleComponent} from './article/article.component';
import {HttpClientModule} from "@angular/common/http";
import {ArticleService} from "./services/article.service";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule, MatDialogModule,
  MatGridListModule,
  MatIconModule, MatInputModule,
  MatListModule, MatMenuModule, MatSelectModule
} from "@angular/material";
import {RatingComponent} from './rating/rating.component';
import {CategoryComponent} from './category/category.component';
import {TopmenuComponent} from './topmenu/topmenu.component';
import {ArticleformComponent} from './articleform/articleform.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    RatingComponent,
    CategoryComponent,
    TopmenuComponent,
    ArticleformComponent,
  ],
  entryComponents: [
    ArticleformComponent
  ]
  ,
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    MatMenuModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ArticleService, AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
