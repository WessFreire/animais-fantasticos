import AnimaNumeros from './anima-numeros.js';

//cria a div contendo informações com o total de animais
export default function fetchAnimais(url, target) {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  function preencherAnimais(animal){                              //preenche cada animal no dom
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animaAnimaisNumeros(){                                 //anima os números de cada animal
    const animaNumeros = new AnimaNumeros('[data-numero]','.numeros' ,'ativo')
    animaNumeros.init();
  }

  async function criarAnimais() {                               //puxa os aniamais através de um arquivo json e cria cada animal yutilizando createAnimal
    try {
      const animaisResponse = await fetch(url);                   //fetch e espera a resposta para dar continuidade ao código
      const animaisJSON = await animaisResponse.json();           //transforma a resposta em json
      
      animaisJSON.forEach((animal) => {                           //após a transformação em json, ativa as funções para preencher e animar os números
        preencherAnimais(animal)
      });
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }
  return criarAnimais();
}
