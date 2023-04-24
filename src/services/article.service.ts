import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, of } from "rxjs";
import { ArticleInfo, ArticleLinks } from "domain/models";

@Injectable()
export class ArticleService {
    constructor(private http: HttpClient) { }

    public loadArticle(identifier: string): Observable<ArticleInfo> {
        return this.http.get(`assets/chapters/${identifier}/content.htm`, { responseType: 'text' })
            .pipe(
                map(data => new ArticleInfo(data, new ArticleLinks("","")))
            );
    }

    public loadArticlesInfo(): Observable<string> {
        return of("")
    }
}