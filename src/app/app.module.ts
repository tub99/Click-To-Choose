import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataHandler } from './services/data-handler/data-handler.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './answer/answer.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    AnswerComponent,
    AssignmentComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
