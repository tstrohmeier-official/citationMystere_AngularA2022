//--------------------------------------------------------
// Fichier: outil.ts
// Dev: Tom Strohmeier
// Date: 26-09-2022
//--------------------------------------------------------

export function tr(msg: string, dlg = 1, cons = 1) {
    if (dlg == 1) {
        alert(msg);
    }
    if (cons == 1) {
        console.log(msg);
    }
}