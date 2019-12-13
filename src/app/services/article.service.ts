import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticle(){
    return new Promise((resolve, reject) => {
      this.http.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=8b83bf223a1c4609bc209b5d19c258b7')
        .subscribe((data: any) => {
          resolve(data.articles);
        },err => {
          console.log(err);
          reject(err);
      });
    })
    
  }
}
