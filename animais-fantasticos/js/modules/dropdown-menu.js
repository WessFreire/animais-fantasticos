import outsideClick from './outsideclick.js';

export default class DropdownMenu{
  constructor(dropdownMenus, events){
    this.dropdownMenus = document.querySelectorAll(dropdownMenus)
    this.events = ['touchstart', 'click']

    if(events === undefined){                                   //define touchstart e click como argumentos padrão de event caso o usuário não os defina
      this.events = ['touchstart', 'click']
    }else{
      this.events = events;
    }

    this.activeClass = 'active'
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this)
  }
  
  activeDropdownMenu(event) {                                     //ativa o dropdown menu e adiciona a função que observa o click fora dele
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove('active');
    });
  }

  addDropdownMenusEvent(){                                       //adiciona os eventos ao dropDownMenu 
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init(){
    if(his.dropdownMenus.length){
      addDropdownMenusEvent();
    }
    return this;
  }
}
