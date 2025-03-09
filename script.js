function adjustIframeSize() {
  let iframe = document.querySelector('iframe');

  // Ajuste de tamanho do iframe conforme a altura da janela do navegador
  if (window.innerHeight >= 1080) {
    iframe.width = "1920";
    iframe.height = "1080";
  } else if (window.innerHeight >= 720) {
    iframe.width = "1280";
    iframe.height = "720";
  } else {
    iframe.width = "960";
    iframe.height = "540";
  }

  // Ajuste do console: ele flutua quando não há espaço suficiente
  let console = document.querySelector('.console');
  const iframeHeight = iframe.offsetHeight;

  if (window.innerHeight - iframeHeight < 150) { // Se o espaço restante for menor que 150px (console + espaçamento)
    console.style.position = 'fixed';
    console.style.bottom = '0';
    console.style.width = '100%';
  } else {
    console.style.position = 'absolute';
    console.style.bottom = 'unset';
  }
}

let idleTimer;
function hideConsoleOnIdle() {
  let console = document.querySelector('.console');
  clearTimeout(idleTimer);
  
  // Mostra o console se o mouse se mover
  console.style.opacity = '1';
  
  idleTimer = setTimeout(function() {
    console.style.opacity = '0'; // Oculta o console após 3 segundos de inatividade
  }, 3000); // Ajuste o tempo conforme necessário
}

window.addEventListener("load", adjustIframeSize);
window.addEventListener("resize", adjustIframeSize);
window.addEventListener("mousemove", hideConsoleOnIdle);
window.addEventListener("scroll", hideConsoleOnIdle);
