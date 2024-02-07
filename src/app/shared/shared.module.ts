// shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';

@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    NavComponent
  ]
})
export class SharedModule { }
