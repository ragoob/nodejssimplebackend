import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/Services/posts.service';
import { Observable } from 'rxjs';
import { posts } from 'src/app/models/posts';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
   id : number;
   post : Observable<posts>
  constructor(private route : ActivatedRoute, private postService : PostsService) { 
     this.route.params.subscribe(p=> this.id = p.id);

  }

  ngOnInit() {
   this.post = this.postService.getPostById(this.id);
  }

}
