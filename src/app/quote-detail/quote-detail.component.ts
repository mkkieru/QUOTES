import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote: any;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  addlike(){
    this.quote.like = this.quote.like+1;
  }

  addislike(){
    this.quote.dislike = this.quote.dislike+1;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
