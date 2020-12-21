import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  
  baseUrl = " http://myprojectstaging.com/blogapi/public/api";

  constructor(public http: HttpClient) { }

  getAllArticles(){
    return this.http.get(this.baseUrl + '/articles');
  }
 
  getArticlesPageWise(url){
    return this.http.get(url);
  }
  
  getSingleArticle(id){
    return this.http.get(this.baseUrl + '/article/' + id);
  }
 
  createNewArticle(data){
    return this.http.post(this.baseUrl + '/article', data);
  }
 
  updateArticle(data){
    return this.http.put(this.baseUrl + '/article', data);
  }
 
  deleteArticle(id){
    return this.http.delete(this.baseUrl + '/article/' + id);
  }
}
