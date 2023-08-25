// --------------------------------------------------------
// Fichier: Case.ts
// Dev: Tom Strohmeier
// Date: 26-09-2022
// --------------------------------------------------------

export class Case {
    Value: string;
    Status: string;

    constructor(value: string) {
        this.Value = value.trim();
        if ((value) == " ") {
            this.Status = "empty";
        } else {
            this.Status = "filled";
        }
    }
}