import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  article:any;

  constructor(private router:Router) { 
    this.article = this.router.getCurrentNavigation().extras.state.article;
  }

  ngOnInit() {
    //console.log(this.article)
  }

}
