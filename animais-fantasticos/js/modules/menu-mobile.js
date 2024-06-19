import outsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(menuButton, menuList, events){
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.activeClass = 'active'
    this.openMenu = this.openMenu.bind(this)
    
    this.events = events
    if (events === undefined){
      this.events = ['click', 'touchstart']
    }else{
      this.events = events
    }
  }

  openMenu(event) {
    event.preventDefault()
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outsideClick(menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents(){
    this.events.forEach(evento => this.menuButton.addEventListener(evento, this.openMenu));
  }

  init(){
    if(this.menuButton && this.menuList){
      this.addMenuMobileEvents;
    }
    return this;
  }
}
