export default class Elem{
    #ertek="";
    #szuloElem;
    #divElem;
    #index=0;
    constructor(index, ertek,szuloElem){
        // beállítjuk az adattagokat
        this.#index=index;
        this.#ertek=ertek;
        this.#szuloElem=szuloElem;
        this.#megjelenit();
        // eseménykezelőa div elemre:
        // a div elem megfogása
        this.#divElem=this.#szuloElem.children("div:last-child");
        this.#divElem.on("click",()=>{
            //console.log(this.#index);
            // csak akkor tudjunk kattintani, ha nincs benne érték
            if(this.#ertek===" "){
                this.#trigger("kattintasom");
            }
            
        });
    }

    #megjelenit(){
        // elkészítjük a html kódot
        let txt=`
                <div class="elem">
                    <p>${this.#ertek}</p>
                </div>
            `;
        this.#szuloElem.append(txt);
    }

    // saját esemány létrehozása
    #trigger(esemenyNev){
        //létrehozunk egy új saját eseményt
        const e = new CustomEvent(esemenyNev,{detail:this.#index});
        // Az eseményt elérhetővé teszem az egész programban
        window.dispatchEvent(e);
    }

}