import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';


@Component({
  selector: 'legende-component',
  templateUrl: './legende.component.html',
  styleUrls: ['./legende.component.css'],
  animations: [
    trigger('mousechange', [

      state('void', style({ opacity: 0, cursor: 'inherit' })),
      transition('void <=> *', [ animate(2000, style({ cursor: 'inherit' })
      ])
    ])
  ]
})
export class LegendeComponent implements OnInit {
  private mouseselection: number;
  constructor() { }

  ngOnInit() {
    // this.changemose()

  }
  private MousePin(number: number) {
   // debugger;
    if (this.mouseselection === number) {
      this.mouseselection = 0;
    } else {
      this.mouseselection = number;
    }

    switch (this.mouseselection) {
      case 0: {document.body.className = "no-pin";
      break;}
      case 1: document.body.className = "pin-yellow"
    }
  }
  // private changemose() {
  //   document.body.className = "pin-yellow"
  // }
}
