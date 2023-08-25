// --------------------------------------------------------
// Fichier: grille-jeu.component.ts
// Dev: Tom Strohmeier
// Date: 26-09-2022
// --------------------------------------------------------

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Citation } from 'src/models/citation';
import { Column } from 'src/models/column';
import { Case } from 'src/models/case';
import { Board } from 'src/models/Board';

@Component({
  selector: 'app-grille-jeu',
  templateUrl: './grille-jeu.component.html',
  styleUrls: ['./grille-jeu.component.css']
})
export class GrilleJeuComponent implements OnInit {

  @Output()
  newGame: EventEmitter<any> = new EventEmitter();

  currentCitation: Citation = new Citation();
  selectionBoard: Board = new Board();
  playBoard: Board = new Board();
  visible: boolean = false;
  viewCitation: boolean = false;
  nbrChar: number = 17;
  citation: string = "";


  constructor() { }

  ngOnInit(): void {
  }

  onAcceptedCitation(Cit: Citation) {
    this.currentCitation = Cit;
    this.visible = true;
    this.citation = this.currentCitation.FormatedCitation;
    this.createBoardBottom();
    this.createBoardTop();
  }

  // -----------------------------------

  // -----------------------------------
  createBoardBottom() {
    let ColNbr: number = this.citation.length / this.nbrChar;

    for (let i = 0; i <= ColNbr; i++) {
      let playGrid = this.playBoard.oneBoard;
      let selecGrid = this.selectionBoard.oneBoard;

      playGrid[i] = new Column();
      selecGrid[i] = new Column();

      for (let x = 0; x < this.nbrChar; x++) {
        if ((i * this.nbrChar) + x < this.citation.length) {
          playGrid[i].Col.push(new Case(this.citation[(i * this.nbrChar) + x]));
        }
      }
    }
  }
  // -----------------------------------

  // -----------------------------------
  createBoardTop() {
    let suffle: Board = new Board();
    let playGrid = this.playBoard.oneBoard;
    let selecGrid = this.selectionBoard.oneBoard;
    let tempGrid = suffle.oneBoard;

    for (let i = 0; i < this.nbrChar; i++) {
      tempGrid.push(new Column());
    }

    // Séparation des valeurs du tableau d'origine selon leur index dans un tableau temporaire
    for (let i = 0; i < playGrid.length; i++) {
      for (let x = playGrid[i].Col.length - 1; x >= 0; x--) {
        tempGrid[x].Col.push(playGrid[i].Col[x]);
      }
    }

    // Mélange les index correspondant entre eux dans le tableau temporaire
    tempGrid.forEach(element => {
      element.Col.sort(() => Math.random() - 0.5);
    });

    // Remplace les index correspondant dans le tableau d'origine => Les index[x] sont mélangés entre eux ect.
    for (let i = 0; i < tempGrid.length; i++) {
      for (let x = 0; x < tempGrid[i].Col.length; x++) {
        selecGrid[x].Col[i] = tempGrid[i].Col[x];
      }
    }
  }
  // -----------------------------------

  // -----------------------------------
  citationVisibilityToggle() {
    if (this.viewCitation == false) {
      this.viewCitation = true;
    } else {
      this.viewCitation = false;
    }
  }
  // -----------------------------------

  // -----------------------------------
  restart() {
    this.viewCitation = false;
    this.playBoard = new Board();
    this.selectionBoard = new Board();
    this.newGame.emit();
    this.visible = false;
  }
}