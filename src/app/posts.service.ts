import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
// import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) {}
  getAllPosts(){
    return this.http.get('/posts/').pipe(map((posts)=>{
      return posts;
    }));
  }

  
}
