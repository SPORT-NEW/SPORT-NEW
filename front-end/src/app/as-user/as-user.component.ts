import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-as-user',
  templateUrl: './as-user.component.html',
  styleUrls: ['./as-user.component.css']
})
export class AsUserComponent implements OnInit {
  posts: any ;
  searchText: any;

   constructor(private data: DataService) {
    this.data.getAll().subscribe((res) => {
      console.log('getall-->', res);
      this.posts = res;
    });
  }

  ngOnInit(): void {
  }

}
