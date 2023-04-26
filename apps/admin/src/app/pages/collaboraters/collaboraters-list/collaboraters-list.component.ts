import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 import { MessageService } from 'primeng/api';
import { Article, ArticleService } from '@eshop/products';

@Component({
  selector: 'admin-collaboraters-list',   
  templateUrl: './collaboraters-list.component.html',
  styles: [
  ]
})



export class CollaboratersListComponent implements OnInit {
  articles: Article[] = [];

  currentProductId!: string;
  articleSummary: string;

  constructor(private articleService: ArticleService,    private messageService : MessageService,

    private router: Router) { 
 }


  ngOnInit(): void {
    this._getArticle();
  }


  private _getArticle(){ 
    this.articleService.getArticle().subscribe( (p) => { 
      this.articles = p;
    }
          )
  }


  deleteArticle(artcileid: string) {
  
    this.articleService.deleteArticle(artcileid).subscribe( () => { 
      this._getArticle();
      this.messageService.add({severity:'success', summary:' success', detail:'article deleted'});
    });
  }



  
  updateArticle(collabid: string) {
    this.router.navigateByUrl(`collab/form/${collabid}`);
  }

  summarizeArticle(id: string): void {
    this.articleService.summarizeArticle(id).subscribe(summary => {
      console.log(summary);
     });
  }
}