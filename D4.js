/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1,l2) {
// Calcola l'area del rettangolo
const area = l1*l2
return area;
console.log ("Larea del rettangolo è:", area(lunghezza1,lunghezza2))
}
let lunghezza1=5;
let lunghezza2=10;
console.log("area rettangolo",area(lunghezza1,lunghezza2));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(num1,num2) {
   if (num1===num2) {
    return (num1+num2)*3;
   } else{
    return num1+num2;
   }
}
console.log(crazySum(2,3));//Output funzione 5
console.log(crazySum(5,5));//Output Funzione 30

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(num) {
    const crazyDiff=num
    let diff= Math.abs(num-19);
    if (num>19) {
        return diff*3;
    }else{
        return diff;
    }
}
console.log(crazyDiff(15));//Output:4
console.log(crazyDiff(25));//output18

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n) {
    return (n >= 20 && n<= 100)|| n===400;
}
console.log(boundary(15)); //Output : false
console.log(boundary(50));// Output : true
console.log(boundary(400));//Output : true
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(str) {
    if (str.startsWith ("EPICODE")) {
        return str;
    } else {
        return "EPICODE" + str;
    }
}
console.log(epify("Hello"));//Output EPICODE HELLO
console.log(epify("EPICODE World"));// Output EPICODE World 
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(num) {
    if (num > 0 && (num % 3 === 0|| num % 7 === 0)) {
        return true ;
    } else {
        return false ;
    }
}
console.log(check3and7(9));// Output true (è multiplo di 3 )
console.log(check3and7(14));// Output true (perchè è multiplo sia di 3 che di 7 )
console.log(check3and7(10));//Output false (non è muktiplo né di tre né di 7)
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(str) {
    return str.split ("").reverse().join("")
}
console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*  function upperFirst(str) {
    const words = str.split("");
    for (const index = 0; index < words.length; index++) {
        words[index] = words[index].topUpperCase() +words[index].slice(1);
    }
    return words.join("");
}
console.log(upperFirst("hello word"));// Output Hello word
console.log(upperFirst("this is a test"));// Output this is a test
/*  
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(str) {
    if (str.length>= 2) {
        return str.slice(1,-1);
    } else{
        return "";
    }
    
}
console.log(cutString("hello")); // Output ell
console.log(cutString("world")); // Output orl
console.log(cutString("a")); // Output ""
console.log(cutString("")); //Output ""
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
    let randomNumebrs = [];
    for (let i = 0; i < n; i++){
        let randomNumebrs = Math.floor(Math.random() * 11);
        randomNumebrs.Math.(randomNumebrs);
    }
    return randomNumebrs;
}
console.log(giveMeRandom(5)); // output [2, 7, 4, 9, 1] (arrey con 5 numeri casuali)
console.log(giveMeRandom(3)); // output [8, 3, 0] a (arrey con tre numeri casuali)