import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Add these imports
import { CourseFormComponent } from "./course-form/course-form.component";
import { CourseListComponent } from "./course-list/course-list.component";


//Update routes to add the /courses and /addCourse routes
const routes: Routes = [
  {
    path: 'courses',
    component: CourseListComponent
  },
  {
    path: 'addCourse',
    component: CourseFormComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
