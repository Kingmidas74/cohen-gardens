import { Component, Input } from '@angular/core';

@Component({
  selector: 'cg-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {
  
  @Input()
  note: any

}
