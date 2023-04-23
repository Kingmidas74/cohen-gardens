import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cg-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  @Input()
  config!:any

}
