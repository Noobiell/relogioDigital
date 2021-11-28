class Relogio {

    constructor(){
        this._hora = document.querySelector("#hora");
        this._dma = document.querySelector("#dma");
        this._diaSemana = document.querySelector("#diaSemana");
        this.initialize();
    }

    initialize(){
        setInterval(()=>{
            this.attHora();
        },1000)
        this.attHora();
    }


get attHora(){
    var dias = Array('domingo','segunda','terça','quarta','quinta','sexta','sábado');

    this.hora = this.date.toLocaleTimeString('pt-br', {hour: "2-digit", minute: "2-digit"});
    this.dma = this.date.toLocaleDateString('pt-br', {day: "numeric", month: "numeric", year: "2-digit"});
    this.diaSemana = dias[this.date.getDay(0)];
}

get date(){
    return new Date();
}

get hora(){
    return this._hora.innerHTML;
}
set hora(value){
    this._hora.innerHTML = value;
}

get dma(){
    return this._dma.innerHTML;
}
set dma(value){
    this._dma.innerHTML = value;
}

get diaSemana(){
    return this._diaSemana.innerHTML;
}
set diaSemana(value){
    this._diaSemana.innerHTML = value;
}

}