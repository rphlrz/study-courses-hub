import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';

//changes: add these imports
import { SharedModule } from "../../shared/shared.module";
import { TeacherFormComponent } from './teacher-form/teacher-form.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';


//add SharedModule in Imports and TeacherForm and TeacherList in declarations
@NgModule({
  declarations: [
    TeacherFormComponent,
    TeacherListComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    SharedModule
  ]
})
export class TeacherModule { }
