import { HttpClient } from '@angular/common/http';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cg-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleComponent {
  
  articleName!: string | null;
  articleContent!: SafeHtml;

  constructor(
    private route: ActivatedRoute, 
    private http: HttpClient,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.loadArticleContent(params['title']);
    });
  }

  loadArticleContent(title: string) {
    if(!!title) {
    this.http.get(`assets/chapters/${title}/content.htm`, { responseType: 'text' })
      .subscribe((data: string) => {
        this.articleContent = this.sanitizer.bypassSecurityTrustHtml(data);
      });
    }
  }
  
}
