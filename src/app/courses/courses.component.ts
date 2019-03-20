import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  showList = true;
  editable = false;
  title = "Page of my Courses";
  myCourse = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    active: false,
    votes: {like: 0, disLike: 0}
  };
  courses = [
    {votes: {like: 4, disLike: 0}, id: 1, name: 'Angular 7', price: 125.785, description: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, minus', active: true},
    {votes: {like: 10, disLike: 2}, id: 2, name: 'Laravel', price: 27.7864, description: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, minus', active: true},
    {votes: {like: 2, disLike: 3}, id: 3, name: 'Symfony', price: 5.72745, description: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, minus ', active: true},
    {votes: {like: 25, disLike: 1}, id: 4, name: 'Spring BOOT', price: 15.127, description: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, minus', active: false},
  ];

  image = "https://avatars0.githubusercontent.com/u/6206647?s=460&v=4";

  constructor() { }

  ngOnInit() {
  }

  addCourse() {
   
    if(this.myCourse.name == '') {
      return;
    }
    // Assign the ID to my current id
    this.myCourse.id = this.courses.length + 1;

    //Add myCourse to courses list
    this.courses.unshift(this.myCourse);
    
    //initialize the current course 
    this.initCourse();
  }

  initCourse() {
     //initialize the current course 
     this.myCourse = {
      id: 0,
      name: '',
      description: '',
      price: 0,
      active: false,
      votes: {like: 0, disLike: 0}
    };
  }

  
  editCourse(course) {
    this.myCourse = course
    this.editable = true
  }

  updateCourse() {
   
    this.editable = false
    //initialize the current course 
    this.initCourse();
  }

  toggleCourse(course) {
    course.active = !course.active;
  }

  showModeDisplay(etat) {
    this.showList = etat;
  }

  voteFromChildToParent(e, course) {
     if(e.status) {
       course.votes.like = e.data
     }else {
      course.votes.disLike = e.data
     }
  }


}
