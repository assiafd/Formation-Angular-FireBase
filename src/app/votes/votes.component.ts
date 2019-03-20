import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

 @Input('like') like = 0;
 @Input('dis-like') disLike = 0;

 @Output('onClickVote') clickVote = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  incLike() {
    this.like++;
    this.clickVote.emit({data: this.like, status: 1});
  }

  incDisLike() {
    this.disLike++;
    this.clickVote.emit({data: this.disLike, status: 0});
  }

}
