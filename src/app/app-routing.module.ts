import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./blog-page/blog-page.module').then(m => m.BlogPageModule) },
  { path: 'createNew', loadChildren: () => import('./create-new/create-new.module').then(m => m.CreateNewModule) },
  { path: 'update/:id', loadChildren: () => import('./create-new/create-new.module').then(m => m.CreateNewModule) }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
