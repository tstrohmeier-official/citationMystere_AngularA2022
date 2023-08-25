// --------------------------------------------------------
// Fichier: citation.ts
// Dev: Tom Strohmeier
// Date: 26-09-2022
// --------------------------------------------------------

import { tr } from "src/app/outils";

export class Citation {
    BasicCitation: string;
    FormatedCitation: string;
    MAXLENGTH: number = 100;
    MINLENGTH: number = 35;

    constructor(
        citation: string = "",
        formatedCitation: string = "") {
        this.BasicCitation = citation;
        this.FormatedCitation = formatedCitation;
    }
    // -----------------------------------

    // -----------------------------------
    validateCitation() {
        // min 35, max 100
        if (!(this.BasicCitation.length >= this.MINLENGTH && this.BasicCitation.length <= this.MAXLENGTH)) {

            tr("Citation invalide: minimum 35 caractères, maximum 100.");

            this.BasicCitation = "";
            return;
        }

        //SCII < 128
        for (let i = 0; i < this.BasicCitation.length; i++) {

            if (this.BasicCitation.charAt(i).charCodeAt(0) > 127) {

                tr("Citation invalide: un ou plusieurs caractère interdits (ASCII < 128)");

                this.BasicCitation = "";
                return;
            }
        }
        return true;
    }
    // -----------------------------------

    // -----------------------------------
    formatBasicCitation() {
        for (let i = 0; i < this.BasicCitation.length; i++) {

            // Recuperation des lettres et espaces seulement
            if ((this.BasicCitation.charAt(i).charCodeAt(0) >= 65 && this.BasicCitation.charAt(i).charCodeAt(0) <= 90) || (this.BasicCitation.charAt(i).charCodeAt(0) >= 97 && this.BasicCitation.charAt(i).charCodeAt(0) <= 122) || (this.BasicCitation.charAt(i) === " ")) {

                this.FormatedCitation = this.FormatedCitation.concat(this.BasicCitation.charAt(i));
            } else {
                this.FormatedCitation = this.FormatedCitation.concat(" ");
            }
        }

        for (let i = this.FormatedCitation.length; i > 0; i--) {
            if (this.FormatedCitation.charAt(i) == " ") {
                if (this.FormatedCitation.charAt(i + 1) == " ") {
                    this.FormatedCitation = this.FormatedCitation.slice(0, i) + this.FormatedCitation.slice(i + 1)
                }
            }
        }
        this.FormatedCitation = this.FormatedCitation.toUpperCase().trim();
    }
}