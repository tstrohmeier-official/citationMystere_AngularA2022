// --------------------------------------------------------
// Fichier: information.component.ts
// Dev: Tom Strohmeier
// Date: 26-09-2022
// --------------------------------------------------------

import { Component, EventEmitter, OnInit, Output, Type } from '@angular/core';
import { Citation } from '../../models/citation';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  @Output()
  acceptedCitation: EventEmitter<Citation> = new EventEmitter<Citation>();

  clientCitation: Citation = new Citation();
  visible: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  // -----------------------------------

  // -----------------------------------
  play() {
    if (this.clientCitation.validateCitation()) {
      this.visible = false;
      this.clientCitation.formatBasicCitation();
      this.acceptedCitation.emit(this.clientCitation);
    }
  }
  // -----------------------------------

  // -----------------------------------
  onNewGame() {
    this.visible = true;
    this.clientCitation = new Citation();
  }
}