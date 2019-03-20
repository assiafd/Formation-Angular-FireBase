import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPosts() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }

  persistPost(post) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', post);
  }
  deletePost(id){
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
  updatePost(post){
    return this.http.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`,post);
    
  }
  recuperPost(id){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
  recuperCommentPost(id){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);


  }
}
