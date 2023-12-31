export class Revista{
    constructor(titulo, issn, periodicidade){//no js não há como criar atributos privados, nem todos os navegadores suportam a suposta forma de torná-los privados
        this.titulo = titulo,
        this.issn = issn,
        this.periodicidade = periodicidade
        this.edicoes = []
    }

    addNovaEdicao(edicao){
        this.edicoes.push(edicao);
    }

    showEdicoes(){
        let layout="";
        for(let edicao of this.edicoes){
            layout+=`
            Número da Edição: ${edicao.numero}
            Volume: ${edicao.volume}
            Data: ${edicao.data}
            ------------------------------
        `;
        }
        return layout;
    }

    publicarRevista(){
        for(let edicao of this.edicoes){
            if(edicao.statusParaPublicacao()){
                return true;
            }else{
                return false;
            }
        }
    }
}
