// função para enviar mensagem para o whatsapp
function linkWhats(){
    var numFone = '5511953710475'
    window.open('https://api.whatsapp.com/send?phone=' + numFone)
}


let slideAtual = 0;
const slides = document.getElementsByClassName('slide');

function mostrarSlide(indice) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[indice].style.display = 'block';
}

function mudarSlide(direcao) {
  slideAtual += direcao;
  if (slideAtual < 0) {
    slideAtual = slides.length - 1;
  } else if (slideAtual >= slides.length) {
    slideAtual = 0;
  }
  mostrarSlide(slideAtual);
}

mostrarSlide(slideAtual);