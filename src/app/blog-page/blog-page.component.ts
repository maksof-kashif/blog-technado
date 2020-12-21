import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {

  articlesData: any = {};
  
  constructor(
    public apiService: ApiService,
    public notificationsService: NotificationsService,
  ) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(){
    this.apiService.getAllArticles().subscribe((response:any)=>{
      console.log(response);
      this.articlesData = response;
    })
  }

  onPagination(url){
    this.apiService.getArticlesPageWise(url).subscribe((response:any)=>{
      console.log(response);
      this.articlesData = response;
    })
  }

  deleteArticle(id){
    this.apiService.deleteArticle(id).subscribe((res: any)=>{
      if(res.status == 200){
        this.notificationsService.success('Success!','Data has been deleted successfully.');
        this.getArticles();
      }
    })
  }
  
  updateArticle(id){

  }

}
