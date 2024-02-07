import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { CardsComponent } from './cards/cards.component';
import { SharedModule } from '../shared/shared.module'; 
import { SolveissueComponent } from '../solveissue/solveissue.component';
@NgModule({
  declarations: [
    BodyComponent,
    CardsComponent,
    SolveissueComponent
  ],
  imports: [
    CommonModule,
    SharedModule 
  ]
})
export class BodyModule { }
