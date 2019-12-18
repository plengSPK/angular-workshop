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
  page:any = {};
  pageSize = 9;
  searchTerm = '';

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.page.currentPage = 1;
    this.articleService.getArticle().then((res: any)=>{
      // console.log(res);
      // res.forEach(element => {
      //   element.publishedAt = moment(element.publishedAt).fromNow();
      // });
      this.articleList = res;
      this.updateSearch('');
    })
  }

  getIndexItem(currentPage) {
    this.page.startItem = (currentPage - 1) * this.pageSize;
    this.page.endItem = (currentPage * this.pageSize);
    this.page.currentPage = currentPage;
  }

  updateSearch(searchTerm) {
    this.articleListFilter = this.articleList.filter((item: any) => {
       return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

    this.page.length = Math.ceil(this.articleListFilter.length / this.pageSize);
    this.page.currentPage = (searchTerm !== this.searchTerm) ? 1 : this.page.currentPage;

    this.getIndexItem(this.page.currentPage);
    this.page.pages = Array(this.page.length).fill(0).map((x, i) => i + 1);
    this.articleListFilter = this.articleListFilter.slice(this.page.startItem, this.page.endItem);

    this.searchTerm = searchTerm;
  }

  setPage(page) {
    this.page.currentPage = page;
    this.updateSearch(this.searchTerm);
  }

}
