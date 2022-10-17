'use strict'
import './card-aluno.js'
import {alunos} from './function.js'

const criarCard = (dado)=>{
    const cardAluno = document.createElement('card-aluno')
    cardAluno.nome = dado.nome

    if(dado.status == 'reprovado'){
        cardAluno.bgcolor = 'red'
    }else if(dado.status == 'desistente'){
        cardAluno.bgcolor = 'yellow'
    }else if(dado.status == 'aprovado'){
        cardAluno.bgcolor = 'blue'
    }

    cardAluno.turma = dado.turma

    cardAluno.fotoAluno = dado.foto

    return cardAluno
}

const carregar = async()=>{
    const dadosAlunos = await alunos()
    console.log(dadosAlunos)

    const container = document.querySelector('.container')

    const criar = dadosAlunos.map(criarCard)

    container.replaceChildren(...criar)
}

carregar()