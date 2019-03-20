
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VotesComponent } from './votes/votes.component';
import { CardCourseComponent } from './card-course/card-course.component';
import { TableCourseComponent } from './table-course/table-course.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//Import Modules
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes =[
  {path: "", pathMatch: "full", redirectTo: "posts" },
  {path: "posts", component: PostsComponent},
  {path: "courses", component: CoursesComponent},
  {path: "posts/:id", component: PostDetailsComponent},
  {path: "**", component: PageNotFoundComponent}
  
  
];
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    NavbarComponent,
    VotesComponent,
    CardCourseComponent,
    TableCourseComponent,
    PostsComponent,
    PostDetailsComponent,
    PageNotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
