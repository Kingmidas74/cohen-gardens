import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  config:any = {
    title: "Wislemn Daily News",
    credo: "Victoria nulla est, Quam quae confessos animo quoque subjugat hostes"
  }
  data:any = {
    articles:[
      {
        title:"Legitimate business",
        content:"",
        description:""
      }
    ],
    notes:[
      {
        id:1,
        title:"short 1",
        description:"lorem ipsum"
      },
      {
        id:2,
        title:"short 2",
        description:"lorem ipsum"
      },
      {
        id:3,
        title:"short 3",
        description:"lorem ipsum"
      }
    ]
  }
}
