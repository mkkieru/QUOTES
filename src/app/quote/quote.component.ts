import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {

  quote: Quote[] = [
    new Quote(1, 'The greatest glory in living lies not in never falling, but in rising every time we fall.', 'Nelson','Mandela', new Date(2021,6,19),0,0),
    new Quote(2,'The way to get started is to quit talking and begin doing. ','Walt','Disney',new Date(2021,6,19),0,0),
    new Quote(3,'Your time is limited, so do not waste it living someone elses life. Do not be trapped by dogma – which is living with the results of other peoples thinking.','Steve','Jobs', new Date(2021,7,19),0,0),
    new Quote(4,'If life were predictable it would cease to be life, and be without flavor.','Eleanor','Roosevelt',new Date(2021,6,19),0,0),
    new Quote(5,'If you look at what you have in life, you will always have more. If you look at what you do not have in life, you will never have enough.','Oprah','Winfrey', new Date(2021,7,19),0,0),
  ];

  toggleDetails(index:any){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }

  deleteQuote(isComplete:boolean, index:any){
    if (isComplete) {
      let toDelete = confirm(`Please confirm that you want to delete ${this.quote[index].quote}?`)

      if (toDelete){
        this.quote.splice(index,1)
      }
    }
  }

  addNewQuote(quote:any){
    let quoteLength = this.quote.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quote.push(quote)
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
