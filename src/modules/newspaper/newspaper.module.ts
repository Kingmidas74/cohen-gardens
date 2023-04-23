import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ArticleModule } from 'modules/article/article.module';
import { LayoutModule } from 'modules/layout/layout.module';
import { NoteModule } from 'modules/notes/note.module';
import { NavModule } from 'modules/nav/nav.module';

import { NewspaperComponent } from './newspaper.component';
import { ArticleContentResolver } from './resolver';



@NgModule({
  declarations: [
    NewspaperComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    LayoutModule,
    ArticleModule,
    NoteModule,
    NavModule,
  ],
  exports: [
    NewspaperComponent
  ],
  providers: [
    ArticleContentResolver
  ]
})
export class NewspaperModule { }
