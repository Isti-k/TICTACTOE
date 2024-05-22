import JatekTer from "./JatekTer.js";

// példányosítjuk a játékteret

class Allapotkezelo{
    #jatekLISTA=[" ","O "," "," "," X"," "," "," "," "];
    #lepes = 0;//ha a lepes számláló páros, akkor X következik, ha ptlan, akkor O
                //a lépésszámlálót mindig növeljük, ha rákkatintunk egy elemre
    constructor(){
        new JatekTer(this.#jatekLISTA);
        // feliratkozom a saját kattintasom eseményre
        $(window).on("kattintasom", (event)=>{
        console.log(event.detail);
        // megváltoztatom aprogram állapotát

        let index = event.detail;
        if (this.#lepes % 2 === 0){
            this.#jatekLISTA[index] = "X";
        }else{
            this.#jatekLISTA[index] = "O";
        }
        this.#lepes++;


        // újra megjelenítem aprogram állapotát
        new JatekTer(this.#jatekLISTA);
});

    }
}




new Allapotkezelo();






