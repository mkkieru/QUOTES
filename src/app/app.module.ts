// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { QuoteComponent } from './quote/quote.component';
// import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
// import { QuoteFormComponent } from './quote-form/quote-form.component';
// import { VoteComponent } from './vote/vote.component';
// import { HighlightDirective } from './highlight.directive';
// import { DateCountPipe } from './date-count.pipe';

// @NgModule({
//   declarations: [
//     AppComponent,
//     QuoteComponent,
//     QuoteDetailComponent,
//     QuoteFormComponent,
//     VoteComponent,
//     HighlightDirective,
//     DateCountPipe
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailsComponent } from './quote-detail/quote-detail.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { DateCountPipe } from './date-count.pipe';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    QuoteFormComponent,
    DateCountPipe,
    HighlightDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
