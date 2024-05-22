import Elem from "./Elem.js";

export default class JatekTer{
    #jatekLISTA=[];
    constructor(JatektLISTA){
        this.#jatekLISTA=JatektLISTA;
        // példányosítjuk az Elem osztályt
        const szuloElem=$(".jatekter")
        szuloElem.empty();
        for (let index = 0; index < this.#jatekLISTA.length; index++) {
        const elem = new Elem(index, this.#jatekLISTA[index], szuloElem);
        }
    }
}

