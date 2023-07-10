function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

$(document).ready(function () {
  $('a[href^="#"]').on("click", function (e) {
    // Verifique se a div tem o ID "minhaDiv" e não tem a classe "ignoreDiv"
    if (!$(this).hasClass("minhaDiv") && !$(this.hash).hasClass("ignoreDiv")) {
      e.preventDefault();
      var target = this.hash;
      var offset = $(target).offset().top - window.innerHeight * 0.235;
      $("html, body").animate(
        {
          scrollTop: offset,
        },
        1000,
        "swing"
      );
    }
  });
});
function toggleText(id) {
  var texto = document.getElementById(id);
  if (texto.style.maxHeight < texto.scrollHeight + "px") {
    texto.style.maxHeight = texto.scrollHeight + "px";
  } else {
    texto.style.maxHeight = "0px";
  }
}
function toggleDesktopMenu() {
  var desktopMenu = document.querySelector(".desktop-menu");
  var screenWidth = window.innerWidth;
  if (screenWidth <= 768) {
    desktopMenu.classList.add("hidden");
  } else {
    desktopMenu.classList.remove("hidden");
  }
}
function expandirImagem(imagem) {
  var overlay = document.getElementById("overlay");
  var imagemAmpliada = document.getElementById("imagemAmpliada");
  imagemAmpliada.src = imagem.src;
  overlay.style.display = "flex";
}

function fecharImagem() {
  var overlay = document.getElementById("overlay");
  overlay.style.display = "none";
}
// Função para verificar se um elemento está pelo menos parcialmente visível na tela
function isElementVisible(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

// Função para animar elementos assim que eles entram na tela
function animateElements() {
  var elements = document.querySelectorAll('.animated-element');

  elements.forEach(function (element) {
    if (isElementVisible(element)) {
      element.classList.add('animated');
    }
  });
}

// Verificar elementos visíveis na tela ao carregar a página
document.addEventListener('DOMContentLoaded', animateElements);

// Verificar elementos visíveis na tela ao rolar a página
window.addEventListener('scroll', animateElements);

window.addEventListener("resize", toggleDesktopMenu);
toggleDesktopMenu();

window.addEventListener('load', function () {
  var fixedElement = document.querySelector('.fixed-element');
  var fixedElementHeight = fixedElement.offsetHeight;
  var content = document.querySelector('.content');
  content.style.paddingTop = fixedElementHeight + 'px';
});

function sumirMenu() {
  $('.menumobile')[0].style.display='block';

}

function rotateArrow(arrowId) {
  var arrowElement = document.getElementById(arrowId);
  arrowElement.classList.toggle('clicked');
}