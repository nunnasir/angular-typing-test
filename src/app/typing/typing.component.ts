import { Component, OnInit } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.css']
})
export class TypingComponent implements OnInit {
  sentence: string = lorem.sentence();
  enteredSentence: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  onInput(value: string) {
    this.enteredSentence = value;
  }

  compare(randomText: string, enteredText: string) {
    if (!enteredText) {
      return 'text-secondary'
    }

    return randomText === enteredText ? 'text-success' : 'text-danger';
  }

}
