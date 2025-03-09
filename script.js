function adjustIframeSize() {
  let iframe = document.querySelector('iframe');
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // Ajuste de tamanho do iframe conforme a altura da janela do navegador
  if (innerHeight >= 1080) {
    iframe.width = "1920";
    iframe.height = "1080";
  } else if (innerHeight >= 720) {
    iframe.width = "1280";
    iframe.height = "720";
  } else {
    iframe.width = "960";
    iframe.height = "540";
  }

  // Ajuste do console: ele fica fixo na parte inferior, mas dependendo do tamanho da tela
  let console = document.querySelector('.console');
  const iframeHeight = iframe.offsetHeight;

  if (screenHeight - iframeHeight < 150) { // Se o espaço restante for menor que 150px (console + espaçamento)
    console.style.position = 'fixed';
    console.style.bottom = '0';
    console.style.width = '100%';
  } else {
    console.style.position = 'absolute';
    console.style.bottom = 'unset';
  }
}

window.addEventListener("load", adjustIframeSize);
window.addEventListener("resize", adjustIframeSize);
