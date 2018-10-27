import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
//import { ViewAllComponent } from './view-all/view-all.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule
  ],
  declarations: [],
  exports:[]
})
export class BodyModule { }
