import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cg-layout',
  templateUrl: './layout.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  @Input()
  title!:string

}