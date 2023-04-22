import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './note.component';
import { NotesComponent } from './notes.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NoteComponent,
    NotesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NotesComponent
  ]
})
export class NoteModule { }
