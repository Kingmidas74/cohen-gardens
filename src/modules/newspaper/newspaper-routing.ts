import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewspaperComponent } from './newspaper.component';
import { ArticleComponent } from '../article/article.component';
import { ArticleContentResolver } from './resolver';

@NgModule({
  imports: [RouterModule.forChild([
      { 
          path: '',        
          component: NewspaperComponent,
          children: [
            {
                path:':title',
                component:ArticleComponent,
                resolve: {
                  content: ArticleContentResolver,
                }
            },
            {
                path:'**',
                redirectTo:'001-legitimate-business',
                pathMatch:'full'

            }
          ]
      }
  ])],
  exports: [RouterModule],
})
export class NewspaperRoutingModule {}