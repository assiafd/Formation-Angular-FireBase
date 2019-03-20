import { Component, OnInit, Input, Output } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table-course',
  templateUrl: './table-course.component.html',
  styleUrls: ['./table-course.component.css']
})
export class TableCourseComponent implements OnInit {
  @Input('courses') courses = []; 

  constructor() { }

  ngOnInit() {
  }

  deleteCourse(index) {
    
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {

        this.courses.splice(index, 1);
        Swal.fire(
          {
            title: 'Course is deleted',
            text: 'You will not be able to recover this imaginary file!',
            type: 'success',
            timer: 3000
          }
        )
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  voteFromChildToParent(e, course) {
    if(e.status) {
      course.votes.like = e.data
    }else {
     course.votes.disLike = e.data
    }
 }


}
