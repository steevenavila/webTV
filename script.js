function adjustIframeSize() {
  let iframe = document.querySelector('iframe');
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // Ajuste de tamanho do iframe conforme o tamanho da tela
  if (screenWidth >= 1920) {
    iframe.width = "1920";
    iframe.height = "1080";
  } else if (screenWidth >= 1280) {
    iframe.width = "1280";
    iframe.height = "720";
  } else {
    iframe.width = "960";
    iframe.height = "540";
  }

  // Ajuste do console: ele só ficará visível abaixo do iframe se a altura da tela for suficiente
  let console = document.querySelector('.console');
  if (screenHeight < 720) {
    console.style.position = 'absolute';
    console.style.bottom = '10px';  // Ajuste da posição do console
  } else {
    console.style.position = 'static';
  }
}

window.addEventListener("load", adjustIframeSize);
window.addEventListener("resize", adjustIframeSize);
