import { Component, OnInit } from '@angular/core';
import {posts} from '../../models/posts'
import { PostsService } from 'src/app/Services/posts.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  posts : Observable<posts[]>;
  constructor(private postService : PostsService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

}
