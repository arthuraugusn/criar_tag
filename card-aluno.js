class card extends HTMLElement{
    constructor(){
        super()
        this.shadow = this.attachShadow({mode: 'open'})
        this.nome = 'Nome do Aluno'
        this.bgcolor ='tomato'
        this.turma = 'Turma'
        this.fotoAluno = ''
    }
    static get observedAttributes(){
        return ['nome', 'bgcolor', 'turma', 'fotoAluno']
    }
    attributeChangedCallback(nameAttr, oldValue, newValue){
        this[nameAttr] = newValue
        /* if(nameAttr == 'nome'){
            this.nome = newValue
        }else if(nameAttr == 'bgcolor'){
            this.bgcolor = newValue
        } */
    }
    connectedCallback(){
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }
    styles(){
        const style = document.createElement('style')
        style.textContent = `
            .card{
                width:200px;
                height:200px;
                display: grid;
                background-color:${this.bgcolor};
                place-items: center;
                grid-template-rows:20% 60% 20%
            }
            .card__nome{
                color:white;
                font-size:1.5rem;
            }
            .card__imagem{
                width:60%;
                height:100%;
                background-repeat: no-repeat;
                background-size: cover;
                background-image: url(${this.fotoAluno})
            }
            .card__turma{
                color:white;
                font-size:2rem;
            }
        `

        return style
    }
    component(){
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
            <div class="card__nome">${this.nome}</div>
            <div class="card__imagem"></div>
            <div class="card__turma">${this.turma}</div>
        `

        return card
    }
}

customElements.define('card-aluno', card)