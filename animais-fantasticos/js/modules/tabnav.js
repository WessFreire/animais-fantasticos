export default class initTabNav {
  constructor(menu, content){
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(conteudo);
    this.activeclass = 'ativo'

  }
  //ativa a tab de acordo com o index da mesma
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeclass);
    });
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeclass, direcao);
  }

  //adiciona os eventos as  tabs
  addTabNavEvent(){
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        this.activeTab(index);
      });
    });
  }

  init(){
    if (this.tabMenu.length && this.tabContent.length){
      this.activeTab(0)                                    //ativar primeiro item
      this.addTabNavEvent()
    }
  }
}
