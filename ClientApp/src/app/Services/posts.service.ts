import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { posts } from '../models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http : HttpClient) { }

  getPosts(): Observable<posts[]>{
    return this.http.get<posts[]>(environment.backEndURL + 'Posts');
  }

  getPostById(id : number) : Observable<posts>{
    return this.http.get<posts>(environment.backEndURL + `Posts/${id}`);
  }
}
