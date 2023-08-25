// --------------------------------------------------------
// Fichier: column.ts
// Dev: Tom Strohmeier
// Date: 26-09-2022
// --------------------------------------------------------

import { Case } from "./case";

export class Column {
    Col: Case[] = [];

    constructor(Cases: Case[] = []) {
        this.Col = Cases;
    }
}