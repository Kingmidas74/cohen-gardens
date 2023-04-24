import { Component, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ArticleInfo } from 'domain/models';
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
        map((data) => data['content'] as ArticleInfo),
        map((articleInfo) =>
          this.sanitizer.bypassSecurityTrustHtml(articleInfo.Content)
        )
      );
  }
}
