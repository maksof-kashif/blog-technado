import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateNewRoutingModule } from './create-new-routing.module';
import { CreateNewComponent } from './create-new.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateNewComponent],
  imports: [
    CommonModule,
    CreateNewRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CreateNewModule { }
