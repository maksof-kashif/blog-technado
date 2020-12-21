import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { NotificationsService } from 'angular2-notifications';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})
export class CreateNewComponent implements OnInit {
  articleData: any = {};
  isUpdate = false;
  constructor(
    public commonFunctionsService: CommonService,
    public notificationsService: NotificationsService,
    public apiService: ApiService,
    public route: ActivatedRoute,
    public router: Router,
  ) { }
  
  ngOnInit(): void {
      this.checkForUpdate();
  }

  onCreateFormSubmit(){
    console.log(this.articleData);
    if(this.commonFunctionsService.required(this.articleData.title) && this.commonFunctionsService.required(this.articleData.body)){
      this.apiService.createNewArticle(this.articleData).subscribe((response: any)=>{
        if(response.status == 200){
          this.notificationsService.success('Success!','Data has been created successfully.');
          this.router.navigateByUrl('');
        }
      },(error)=>{
        this.notificationsService.error(error.message);
      })
    } else this.notificationsService.info('Info!','Please fill all the required field first.');
  }
  
  onUpdate(){
    if(this.commonFunctionsService.required(this.articleData.title) && this.commonFunctionsService.required(this.articleData.body)){
      this.apiService.updateArticle(this.articleData).subscribe((response: any)=>{
        if(response.status == 200){
          this.notificationsService.success('Success!','Data has been updated successfully.');
          this.router.navigateByUrl('');
        }
      },(error)=>{
        this.notificationsService.error(error.message);
      })
    }else this.notificationsService.info('Info!','Please fill all the required field first.');
  }

  checkForUpdate(){
    if(this.commonFunctionsService.required(this.route.snapshot.params['id'])){
      this.isUpdate = true;
      this.apiService.getSingleArticle(this.route.snapshot.params['id']).subscribe((res: any)=>{
        this.articleData = res.data
      })
    }
  }

}
