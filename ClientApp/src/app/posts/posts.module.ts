import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  {path : ':id',component: DetailsComponent}
 
];


@NgModule({
  declarations: [ListComponent, DetailsComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class PostsModule { }
