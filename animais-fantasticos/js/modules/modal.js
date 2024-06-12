export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal){
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    this.eventToggleModal = this.eventToggleModal.bind(this)              //bind this ao callback  para fazer referência ao objeto da classe
    this.cliqueForaModal = this.cliqueForaModal.bind(this)
  }

  toggleModal() {                                                         //abre e fecha o modal
    containerModal.classList.toggle('ativo');
  }

  eventToggleModal(event){                                                //adiciona o evento de toggle ao modal                      
    event.preventDefault();
    this.toggleModal()
  }
   
  cliqueForaModal(event) {                                                //fecha o modal ao clicar do lado de fora
    if (event.target === this.containerModal) {
      this.toggleModal(event);
    }
  }

  addModalEvent(){                                                        //adiciona os eventos aos elementos do modal    
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }

  init(){
    if(this.botaoAbrir && this.botaoFechar && this.containerModal){
      this.addModalEvent()
    }
    return this
  }
}
