export default class AnimaNumeros{
  constructor(numeros,observerTarget, observerClass){
    this.observerTarget = document.querySelector(observerTarget)
    this.numeros = document.querySelectorAll(numeros);
    this.observerClass = observerClass;

    //bind o this do objeto ao callback da mutação
    this.handleMutation = this.handleMutation.bind(this)
  }

  //recebe um elemento do dom com número em seu texto
  //incrementa de 0 até o número final
  static incrementarNumero(numero){
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  //ativa incrementar número para cada número selecionado do DOM
  animaNumeros() {
    this.numeros.forEach((numero) => {
      this.constructor.incrementarNumero(numero)
    });
  }

  //função que ocorre quando a mutação ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      animaNumeros();
    }
  }

  // Adiciona o mutationObserver para vcerificar
  //quando a classe 'ativo' é adicionada ao elemento target
  addMutationObserver(){
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init(){
    if(this.numeros.length && this.observerTarget){
    this.addMutationObserver()
    }
  }
}
