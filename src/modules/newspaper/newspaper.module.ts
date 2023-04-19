import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewspaperComponent } from './newspaper.component';
import { ArticleModule } from 'src/modules/article/article.module';
import { LayoutModule } from 'src/modules/layout/layout.module';
import { NoteModule } from 'src/modules/notes/note.module';



@NgModule({
  declarations: [
    NewspaperComponent
  ],
  imports: [
    CommonModule,

    LayoutModule,
    ArticleModule,
    NoteModule
  ],
  exports: [
    NewspaperComponent
  ]
})
export class NewspaperModule { }
