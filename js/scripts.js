// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

let containercell = document.querySelector(".containercell");

    let btnGenerate = document.getElementById("generate");
    btnGenerate.addEventListener ("click", 
        function (){

            for (let i = 0; i < 100 + 1; i++){
            console.log(i);
            let div = document.createElement('div');
            div.classList.add('cell');
            containercell.append(div);

            cell.addEventListener ("click", 
            function (){

                    // let cellcolor = document.getElementsByClassName("cell");
                    // cellcolor.classList.add('change');
                    

                } 
            )        
        }
    }
);