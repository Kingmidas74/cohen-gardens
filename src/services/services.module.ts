import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ArticleService } from './article.service';



@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ArticleService,
  ]
})
export class ServicesModule { }
