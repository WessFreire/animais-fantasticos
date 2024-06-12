export default class Accordion{
  constructor(list){
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'ativo'
}

  toggleAccordion(item) {
    this.classList.toggle(this.activeClass);
    this.nextElementSibling.classList.toggle(this.activeClass);
  }

  //adiciona os eventtos ao accordion
  addAccordionEvent(){
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    })
  }

  //iniciar função
  init(){
    if (this.accordionList.length) {
      this.toggleAccordion(this.accordionList[0])             //ativar primeiro item
      this.addAccordionEvent
    } 

  }

}