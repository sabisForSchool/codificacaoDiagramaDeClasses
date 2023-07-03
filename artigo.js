class Artigo{
    constructor(titulo, autor){
        this.titulo = titulo,
        this.autor = autor
    }

    get getArtigo(){
        return `Título: ${this.titulo}<br>Autor: ${this.autor}`
    }
}
export default Artigo;