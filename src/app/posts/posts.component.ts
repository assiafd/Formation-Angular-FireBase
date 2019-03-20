import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import  toastr from 'toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  editable = false;
  showForm = false;
  posts: any[] = [];
  myPost: any = {
    id: 0,
    title: '',
    body: ''
  }
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.recupPosts()
  }

  recupPosts() {
    this.postService.getAllPosts().subscribe((res: any[]) => {
      this.posts = res;
      console.log(res)
    });
  }

  

  savePost(f) {
    if (f.valid){
    this.postService.persistPost(this.myPost)
                    .subscribe(res => {
                       this.posts.unshift(res);
                       this.initPost()
                       toastr.success("This post is created successfully")
                       this.showForm = false
                       },
                       (err) => {toastr.error(err.message)}
                       );
   }else {
     toastr.error('Error');
   }
  }

  
  // removePost(id, index){
  //   this.postService.deletePost(id).subscribe(res=> {
  //     this.posts.splice(index,1);
  //     toastr.success("This post is deleted successfully")
  //   },
  //   (err) => toastr.error(err.message)
  //   )
  // }

  removePost(id, index){
    this.postService.deletePost(id).subscribe(res=> {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this post!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.posts.splice(index,1);
      toastr.success("This post is deleted successfully")
      
    // For more information about handling dismissals please visit
    // https://sweetalert2.github.io/#handling-dismissals
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled',
        'Your post is safe :)',
        'error'
      )
    }
  })
    },
    (err) => toastr.error(err.message)
    )
  }

  editPost(post) {
  
      this.myPost = post;
      this.editable = true;
      this.showForm = true;
    
  }

  updatePost() {
   
   this.postService.updatePost(this.myPost).subscribe(res => {
     console.log(res);
     this.editable = false;
      this.showForm = false;
      this.initPost();
      toastr.info("This post is updated Successufully")
   })
  }
  log(myTitle){
    console.log(myTitle)

  }

  initPost() {
    this.myPost = {
      id: 0,
      title: '',
      body: ''
    }
  }

}
