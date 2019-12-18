import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticleDetailComponent } from './article-card/article-detail/article-detail.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'detail',component:ArticleDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
