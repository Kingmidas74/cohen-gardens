import { Component, Input } from '@angular/core';

@Component({
  selector: 'cg-newspaper',
  templateUrl: './newspaper.component.html',
  styleUrls: ['./newspaper.component.scss']
})
export class NewspaperComponent {

  @Input()
  config:any;

  @Input()
  data:any;

}
