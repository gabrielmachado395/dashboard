var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}
// Essa função remove o item que não foi clicado da classe 'ativo' e adiciona o item que foi clicado.
// A classe ativo tem uma função de animação que só deve ser usada em um item que teve interação

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)


var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})