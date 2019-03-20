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

  idPost: 0;
  comments: any[] = [];
  myPost: any = {
    id: 0,
    title: '',
    body: ''
  }
 
  ngOnInit() {
    this.idPost = this.router.snapshot.params.id;
    this.recupPostById();
    this.recupComments();
  }
 
  recupPostById(){
    this.postService.recuperPost(this.idPost).subscribe(res =>{
    this.myPost = res;
    
    })
  }

  recupComments(){
    this.postService.recuperCommentPost(this.idPost).subscribe((res: any[]) =>{
      this.comments = res;
      
    });
  }
 

}
