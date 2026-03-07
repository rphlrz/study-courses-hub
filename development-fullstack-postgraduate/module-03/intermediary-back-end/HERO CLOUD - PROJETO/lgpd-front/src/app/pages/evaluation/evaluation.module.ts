import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluationRoutingModule } from './evaluation-routing.module';

//changes: add these imports
import { SharedModule } from "../../shared/shared.module";
import { EvaluationFormComponent } from './evaluation-form/evaluation-form.component';
import { EvaluationListComponent } from './evaluation-list/evaluation-list.component';


//add SharedModule in Imports and EvaluationForm and EvaluationList in declarations
@NgModule({
  declarations: [
    EvaluationFormComponent,
    EvaluationListComponent
  ],
  imports: [
    CommonModule,
    EvaluationRoutingModule,
    SharedModule
  ]
})
export class EvaluationModule { }
