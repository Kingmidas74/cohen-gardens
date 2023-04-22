import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewspaperComponent } from './newspaper.component';
import { ArticleModule } from 'src/modules/article/article.module';
import { LayoutModule } from 'src/modules/layout/layout.module';
import { NoteModule } from 'src/modules/notes/note.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NewspaperComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    LayoutModule,
    ArticleModule,
    NoteModule
  ],
  exports: [
    NewspaperComponent
  ]
})
export class NewspaperModule { }
