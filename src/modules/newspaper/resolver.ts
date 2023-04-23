import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ArticleContentResolver {
    constructor(
        private router: Router,
        private http: HttpClient,
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string | null> | Promise<string | null> | string | null {
        const title = route.paramMap.get('title');
        if (!!title) {
            return this.http.get(`assets/chapters/${title}/content.htm`, { responseType: 'text' })
                .pipe(
                    catchError(error => {
                        this.router.navigate(['/']);
                        return of(null);
                    })
                );
        }
        return of(null);
    }
}
