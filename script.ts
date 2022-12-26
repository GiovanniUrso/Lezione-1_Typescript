// NODEJS & TYPESCRIPT // L'oggetto Math // 2 Giorni
// NPM, gestione pacchetti
// Sintassi Typescript

let nome = 'Giovanni'; // Come in Js inizializzo una variabile con la keyword let, e assegno un valore
nome = 'Rosario'; // Essendo 'nome' una variabile posso riassegnarne il valore MA!... 
nome = 15; // QUI RICEVO ERRORE! 

let nome2:string = 'Giovanni';
let eta:number = 30;
let coniugato: boolean = true;
let variabile: null;
variabile = 'Giovanni' // !ATTENZIONE! Se dichiaro una variabile di tipo null sarà null per tutto il blocco di codice, uguale con undefinded

let obj = {nome : 'giovanni'}; // ATTENZIONE! REFERENCIES!





class Random {

	numero: number;

	constructor(numero: number) {
		this.numero = numero;
	}

	getRandom() {
		return (Math.random()) * this.numero;
	}
}

let r = new Random(10);
console.log(r.getRandom());


