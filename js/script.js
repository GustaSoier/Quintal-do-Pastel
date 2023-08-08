// menu hamburguer
document.querySelector(".abrir-menu").onclick = function () {
  document.documentElement.classList.add("menu-ativo");
}
document.querySelector(".fechar-menu").onclick = function () {
  document.documentElement.classList.remove("menu-ativo")}

// função para enviar mensagem para o whatsapp
function linkWhats(){
    var numFone = '5511910799496'
    window.open('https://api.whatsapp.com/send?phone=' + numFone)
}

// carrosel de avaliações

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



// menu fixo
window.onscroll = function(){
  var top = window.scrollY || document.documentElement.scrollTop;
  console.log(top);

  if(top > 800){
    console.log("Adicionar meu menu fixo");
    document.getElementById("topoFixo").classList.add("menu-fixo")
    document.getElementById("topoFixo").classList.remove("site")
  }

  else{
    console.log("Remover meu menu fixo");
    document.getElementById("topoFixo").classList.remove("menu-fixo")
    document.getElementById("topoFixo").classList.add("site")
  }
}

