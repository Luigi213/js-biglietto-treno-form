let button = document.getElementById("generate");
button.addEventListener('click',function(){
    // 1,2- inserire i chilometri e l'eta
    let kilometres = document.getElementById("km").value;
    let age = document.getElementById("age").value;
    // 3- calcolo del prezzo del biglietto con le dovute le regole:
        // 3.1 applicare il prezzo in base ai chilometri da percorrere (0.21 € al km)
        let price_ticket;
        // 3.2- applicare lo sconto in base all'età
        if (age == 'underage'){ 
            // minorenni 20%
            price_ticket = (0.21 * kilometres * 0.8).toFixed(2);
            console.log(price_ticket)
        }
        else if (age == 'over-65'){
            // over 65 di 40%
            price_ticket = (0.21 * kilometres * 0.6).toFixed(2);
        }
        else{
            // tra 18 e 65 nessun sconto 
            price_ticket = (0.21 * kilometres).toFixed(2);
        }
    // 4- visualizza in forma umana 
    document.getElementById("ticket-js"). innerHTML = price_ticket + '€';
})
