export default class Cl_personas {
    constructor (n , s) {
        this.nombre = n;
        this.sexo = s;
    }

    set nombre(n) {
        this._nombre = n;
    }
    set sexo(s) {
        this._sexo = s;
    }

    get nombre() {
        return this._nombre;
    }
    get sexo(){
        return this._sexo;
    }

}