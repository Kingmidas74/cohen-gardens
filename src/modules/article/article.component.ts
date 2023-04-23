import { Component, Input, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'cg-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleComponent {

  articleContent$!: Observable<SafeHtml>;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {

  }

  ngOnInit(): void {
    this.articleContent$ = this.route.data
      .pipe(
        map(data => data['content']),
        map(data => this.sanitizer.bypassSecurityTrustHtml(data))
      );
  }
}
