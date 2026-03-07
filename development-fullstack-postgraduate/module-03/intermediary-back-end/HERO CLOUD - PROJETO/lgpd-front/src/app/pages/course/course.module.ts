import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';

//changes: add these imports
import { SharedModule } from "../../shared/shared.module";
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseListComponent } from './course-list/course-list.component';


//add SharedModule in Imports and CourseForm and CourseList in declarations
@NgModule({
  declarations: [
    CourseFormComponent,
    CourseListComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    SharedModule
  ]
})
export class CourseModule { }
