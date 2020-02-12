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
  MatListModule, MatMenuModule, MatSelectModule, MatToolbarModule
} from "@angular/material";
import {RatingComponent} from './rating/rating.component';
import {CategoryComponent} from './category/category.component';
import {TopmenuComponent} from './topmenu/topmenu.component';
import {ArticleformComponent} from './articleform/articleform.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthComponent} from './auth/auth.component';
import {ArticlesComponent} from './articles/articles.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthService} from "./services/auth.service";
import {AuthGuard} from "./services/auth-guard.service";

const appRoutes: Routes = [
  {path: 'auth', component: AuthComponent},
  {path: 'articles', component: ArticlesComponent},
  {path: '**', redirectTo: "articles"}
];

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    RatingComponent,
    CategoryComponent,
    TopmenuComponent,
    ArticleformComponent,
    AuthComponent,
    ArticlesComponent,
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
    RouterModule.forRoot(appRoutes),
    MatToolbarModule
  ],
  providers: [ArticleService, AppComponent, ArticlesComponent, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
