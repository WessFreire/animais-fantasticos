export default class ScrollAnima{
  constructor(sections){
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;

    this.checkDistance = this.checkDistance.bind(this);
  }

  getDistance(){                                              //pega a distância de cada item em relação ao topo do site
    this.distance = [...this.sections].map((section)=>{
      const offSet = sectionTop.offsetTop;
      return{
        element: section,
        offSet: Math.floor(offSet - this.windowMetade)
      }
    })
  }
  
  checkDistance(){                                              //verifica a distância de cada objeto em relação ao scroll do site
    this.distance.forEach((item)=>{
      if (item.scrollY > item.offSet){
        item.element.classList.add('ativo')
      }else if (item.element.classList.contains('ativo')) {
        item.element.classList.remove('ativo');
      }
    })
  }
  

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - this.windowMetade) < 0;
      if (isSectionVisible) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    })
  }

  init(){
    if (this.sections.lenght){
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this
  }

  stop(){                                                       //remove o event de scroll
    window.addEventListener('scroll', this.checkDistance);
  }
}