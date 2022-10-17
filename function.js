const alunos = async()=>{
    const url = 'https://testeleonid.herokuapp.com/alunos'
    const response = await fetch(url)
    const listaAlunos = await response.json()

    return listaAlunos
}

export{
    alunos
}