import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: "newspaper",
          loadChildren: () =>
            import("../modules/newspaper/newspaper-routing").then( mod => mod.NewspaperRoutingModule)
        },
        {
          path: '',
          redirectTo: 'newspaper',
          pathMatch:'full'
        },
      ]
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
