export default class CL_progpersonas {
    constructor() {
        this.acEdad = 0;
        this.cntPers = 0;
        this.acEdadMuj = 0;
        this.edadMayMuj = 0;
        this.cntM = 0;
    }

    procesarPersonas(p) {
        this.acEdad += p.edad;
        this.cntPers++;
        if (p.sexo == "F") {
            this.cntM++;
            this.acEdadMuj += p.edad;
            if (p.edad > this.edadMayMuj) {
                this.edadMayMuj = p.edad;
            }
        }
        }

    edadPromedio() {
        return this.acEdad / this.cntPers;
    }

    edadMayMujer() {
        return this.edadMayMuj;
    }
}