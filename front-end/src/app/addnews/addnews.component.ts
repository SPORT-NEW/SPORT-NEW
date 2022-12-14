import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../_services/data.service';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.css']
})
export class AddnewsComponent implements OnInit {
  file: any
  files: any
  url: any
  constructor(private data: DataService, private path: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  fileUpload(event: any) {
    this.file = event.target.files[0];
    console.log("file--->", this.file);

    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      console.log(file);

      reader.readAsDataURL(file);
      reader.onload = () => {
        this.files = reader.result;
        console.log("readRes--->", reader.result)

        this.url = reader.result as string;
        console.log(this.url);


      };

    }
  }
  newpost(add: any) {
    const formData = new FormData();
    formData.append("upload_preset", "lweb9fhl");
    formData.append("file", this.files);

    console.log("add--->", add)
    let post = add.value
    console.log("newpost--->", post)

    this.http.post('https://api.cloudinary.com/v1_1/trust-us/upload', formData).subscribe((res: any) => {
      console.log("resCLD", res)


      post.image = res.secure_url
      console.log("newpost*--->", post)

      this.data.addNew(post).subscribe(res => {
        console.log("addres--->", res)
        this.path.navigate(['/home'])

      })


    }
    )

  }
}
