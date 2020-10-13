import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css'],
})
export class QuoteFormComponent implements OnInit {
  newQuote: Quote = new Quote(0, '', '', '', new Date());

  @Output() createQuote = new EventEmitter<Quote>();

  addQuote(login: NgForm) {
    this.createQuote.emit(this.newQuote);
    this.newQuote = new Quote(0, '', '', '', new Date());
    login.reset();
  }

  constructor() {}

  ngOnInit(): void {}
}
