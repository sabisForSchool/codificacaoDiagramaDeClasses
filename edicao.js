export class Edicao{
    constructor(numero, volume){
        this.numero = numero,
        this.volume = volume,
        this.data = new Date().toDateString();//na hora que criar o objeto vai inicializar com a data atual
        this.artigos = []
    }

    addNovoArtigo(artigo){
        if(this.artigos.length < 15){
            this.artigos.push(artigo);
            return true;
        }else{
            return false;
        }
    }

    get getEdicao(){
        return `Número: ${this.numero}<br>Volume:${this.volume}<br>Data:${this.data}`;
    }

    get showArtigos(){
        let layout = "";

        for(let artigo of this.artigos){
            layout+=`
            Título: ${artigo.titulo}
            Autor: ${artigo.autor}
            -------------------------------
            `;
        }
        return layout;
    }

    statusParaPublicacao(){
        if(this.artigos.length >= 10){
            return true
        }else{
            false;
        }
    }
}
