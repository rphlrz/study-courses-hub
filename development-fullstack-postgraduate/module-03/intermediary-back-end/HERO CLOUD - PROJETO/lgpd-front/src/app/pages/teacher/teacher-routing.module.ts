import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Add these imports
import { TeacherFormComponent } from "./teacher-form/teacher-form.component";
import { TeacherListComponent } from "./teacher-list/teacher-list.component";


//Update routes to add the /teachers and /addTeacher routes
const routes: Routes = [
  {
    path: 'teachers',
    component: TeacherListComponent
  },
  {
    path: 'addTeacher',
    component: TeacherFormComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
