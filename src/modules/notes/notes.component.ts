import { Component, Input } from '@angular/core';

@Component({
  selector: 'cg-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {

  @Input()
  notes:any[] = []

  @Input()
  odd:boolean = false

}
