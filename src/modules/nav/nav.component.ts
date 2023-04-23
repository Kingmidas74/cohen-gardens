import { Component, Input } from '@angular/core';

@Component({
  selector: 'cg-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  @Input()
  notes!:any[]
}
