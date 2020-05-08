import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  counter = 0;
  plus() {
    this.counter += 1;
  }
  reset() {
    this.counter = 0;
  }
  minus() {
    this.counter -= 1;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
