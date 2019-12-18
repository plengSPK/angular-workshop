import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articleList = [];
  articleListFilter = [];
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getArticle().then((res:any)=>{
      // console.log(res);
      // res.forEach(element => {
      //   element.publishedAt = moment(element.publishedAt).fromNow();
      // });
      this.articleList = res;
      this.articleListFilter = res;
    })
  }

  updateSearch(searchTerm){
    this.articleListFilter = this.articleList.filter((item: any) => {
       return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
}

}
