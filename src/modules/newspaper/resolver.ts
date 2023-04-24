import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { ArticleInfo } from '../../domain/models';
import { ArticleService } from 'services/article.service';

@Injectable({
    providedIn: 'root'
})
export class ArticleContentResolver {
    constructor(
        private router: Router,
        private newspaperService: ArticleService,
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ArticleInfo | null> | Promise<ArticleInfo | null> | ArticleInfo | null {
        const title = route.paramMap.get('title');
        if (!title) {
            return of(null);
        }
        return this.newspaperService.loadArticle(title).pipe(
            switchMap(content => of(content)),
            catchError(_ => {
                this.router.navigate(['/']);
                return of(null);
            })
        );
    }
}
