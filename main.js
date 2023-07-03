import {Revista} from './revista.js'
import {Edicao} from './edicao.js'
import Artigo from './artigo.js';

const revista1 = new Revista("Caras", 123, "Semanal");
const edicao1_revista1 =  new Edicao(1, 1);

revista1.addNovaEdicao(edicao1_revista1)
console.log(revista1.showEdicoes());

const artigo1 = new Artigo("T1", "Sabrina");
const artigo2 = new Artigo("T2", "Sabrina");
const artigo3 = new Artigo("T3", "Sabrina");
const artigo4 = new Artigo("T4", "Sabrina");
const artigo5 = new Artigo("T5", "Sabrina");
const artigo6 = new Artigo("T6", "Sabrina");
const artigo7 = new Artigo("T7", "Sabrina");
const artigo8 = new Artigo("T8", "Sabrina");
const artigo9 = new Artigo("T9", "Sabrina");
const artigo10 = new Artigo("T10", "Sabrina");

edicao1_revista1.addNovoArtigo(artigo1)
edicao1_revista1.addNovoArtigo(artigo2)
edicao1_revista1.addNovoArtigo(artigo3)
edicao1_revista1.addNovoArtigo(artigo4)
edicao1_revista1.addNovoArtigo(artigo5)
edicao1_revista1.addNovoArtigo(artigo6)
edicao1_revista1.addNovoArtigo(artigo7)
edicao1_revista1.addNovoArtigo(artigo8)
edicao1_revista1.addNovoArtigo(artigo9)
/*edicao1_revista1.addNovoArtigo(artigo10)*/

if(revista1.publicarRevista()){
    console.log("A revista já pode ser publicada");
}
else{
    console.log("A revista não pode ser publicada! É necessário ter no mínimo 10 e no máximo 15 artigos")
}

console.log(edicao1_revista1.showArtigos);