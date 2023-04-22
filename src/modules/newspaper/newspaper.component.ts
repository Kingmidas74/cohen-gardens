import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cg-newspaper',
  templateUrl: './newspaper.component.html',
  styleUrls: ['./newspaper.component.scss']
})
export class NewspaperComponent {

  config: any = {
    title: "Wislemn Daily News",
    credo: "Victoria nulla est, Quam quae confessos animo quoque subjugat hostes"
  }
  data: any = {
    articles: [
      {
        title: "Legitimate business",
        content: "",
        description: ""
      }
    ],
    notes: [
      {
        id: 1,
        title: "Legitimate business",
        description: "It's always hard to be an immigrant. New places, new rules, new people around. The world has just begun to move away from that tragedy that had happened before, the war which had swiped all lands. Many people have not returned to their homes. Someone decided to stay in new places to find a better life. Someone did not have any option to choose. Fortunately, Jack belonged to the first ones.",
        link: "001-legitimate-business"
      },
      {
        id: 2,
        title: "Holy lance",
        description: "Do not make yourself an idol, so it seems to be said there? Thomas took a sip of the bottle bitterly. The stage of civilized drinking in glasses has long passed. Much has already passed for him. But once life seemed full of prospects. Even there, in the war, when he was still a quiet sucker.",
        link: "002-holy-lance"
      },
      {
        id: 3,
        title: "One-way road",
        description: "Today he heard these phrases everywhere. Rejoiced mostly Republicans, of course. Although he himself did not particularly share the strange joy of his colleagues and friends. The event is quite ordinary.",
        link: "003-one-way-road"
      }
    ]
  }
}
