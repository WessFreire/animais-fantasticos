export default class Tooltip {
  constructor(tooltips){
    this.tooltips = document.querySelectorAll(tooltips);
                                                                
    this.onMouseMove = this.onMouseMove.bind(this)                    //bind do objeto da classe aos callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.onMouseOver = this.onMouseOver.bind(this)
  }

    onMouseMove(event) {                                              //move a tooltip de acordo com a posição do mouse
      this.tooltipBox.style.top = `${event.pageY + 20}px`;
      if(event.pageX + 240 > window.innerWidth){
        this.tooltipBox.style.left = `${event.pageX - 190}px`;
      }else{
        this.tooltipBox.style.left = `${event.pageX + 20}px`;
      }
  };

  
    onMouseLeave(event) {                                           //remove os eventos de mouseMove e mouseLeave
      this.tooltipBox.remove();
      EventTarget.currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
      EventTarget.currentTarget.removeEventListener('mousemove', this.onMouseMove);
    }
  

    criarTooltipBox(element) {                                    //cria a tooltip box e coloca no body
      const text = element.getAttribute('aria-label');
      tooltipBox.classList.add('tooltip');
      tooltipBox.innerText = text;
      document.body.appendChild(tooltipBox);
      this.tooltipBox = tooltipBox;
  }

    onMouseOver(event) {                                         //cria a tooltip e adiciona os eventos de mouseMove e mouseLeave ao target
      this.criarTooltipBox(event.currentTarget);                 //cria a tooltip box e coloca em uma propriedade
      event.currentTarget.addEventListener('mousemove', this.onMouseMove);
      event.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
    }

    addTooltipEvents(){                                         //adiciona os eventos de mouseOver a cada tooltip
      this.tooltips.forEach((item) => {
        item.addEventListener('mouseover', this.onMouseOver);
      });
    }

    init(){
      if(this.tooltips.length){
        this.addTooltipEvents()
      }
      return this
    }
}
