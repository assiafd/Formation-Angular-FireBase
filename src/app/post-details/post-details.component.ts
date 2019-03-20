import { Component, OnInit, Output, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  constructor(private router : ActivatedRoute, private postService: PostService) { }

  comments: any[] = [];
  myPost: any = {
    id: 0,
    title: '',
    body: ''
  }
 
  ngOnInit() {
    let idPost = this.router.snapshot.params.id;
    this.recupPostById(idPost);
    this.recupComments(idPost);
  }
 
  recupPostById(id){
    this.postService.recuperPost(id).subscribe(res =>{
    this.myPost = res;
    
    })
  }

  recupComments(id){
    this.postService.recuperCommentPost(id).subscribe((res: any[]) =>{
      this.comments = res;
      
    });
  }
 

}
