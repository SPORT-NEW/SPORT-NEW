import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  posts: any = [];
  searchText: any;
  editData = {id:'', title: '',content:'', theme: '' };
  msg=''
  constructor(private news: DataService) {
    this.news.getAll().subscribe((res) => {
      console.log('getall-->', res);
      this.posts = res;
    });
  }
  ngOnInit(): void {}
  delete(id: any, a: number) {
    this.news.deletenews(id).subscribe((res) => {
      console.log(res);
      this.posts.splice(a, 1);
    });
  }
  getData(id:any,theme: string, content:string, title: string) {
    this.editData.id = id;

    this.editData.theme = theme;
    this.editData.content = content;
    this.editData.title = title;
    console.log(this.editData);
    
  }

  update( edit:any) {

    console.log(edit.value);
    this.news.update(this.editData.id, edit.value).subscribe((res) => {
      console.log(res);
      location.reload();
      this.msg="updated successfully"
    });
   
  }
}
