import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.css']
})
export class AddnewsComponent implements OnInit {

  constructor(private data: DataService, private path: Router) { }

  ngOnInit(): void {
  }
  newpost(f: any) {
    console.log("f--->",f)
    let post = f.value
    console.log("newpost--->",post)
    this.data.addNew(post).subscribe(res => {
      console.log("addres--->",res)
      this.path.navigate(['/home'])
    })

  }
}
