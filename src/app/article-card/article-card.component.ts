import { Component, OnInit, Input} from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {

  constructor(private router:Router) { }

  @Input() articleData: any;

  ngOnInit() {
    this.articleData.urlToImage = (this.articleData.urlToImage == null) ? 'http://lamp.oja.go.th/MediaNewsIMG/default-image.png' : this.articleData.urlToImage;
  }

  OpenDetail(){
    //console.log(this.articleData)
    const data = this.articleData;
    this.router.navigate(['detail'],{ state: { article: data } })
  }
}
