

const toggleButton = document.getElementById('toggleBarra');
const divBotoes = document.getElementById('barraAcessibilidade');

toggleButton.addEventListener('click', function() {
  if (divBotoes.style.display === 'none') {
    divBotoes.style.display = 'flex';  // Mostra a DIV
  } else {
    divBotoes.style.display = 'none';   // Esconde a DIV
  }
});

const ativaVlibras = document.getElementById('vlibraS');
const botVlibras = document.getElementById('botaoVlibras');
const acessLibras = document.getElementById('acessLibras');
const pluginLibras = document.getElementById('pluginLibras');

botVlibras.addEventListener('click', function() {
  if (ativaVlibras.style.display === 'none') {
    ativaVlibras.style.display = 'flex'; 
    acessLibras.style.display = 'flex'; 
    pluginLibras.style.display = 'flex'; // Mostra a DIV
  } else {
    ativaVlibras.style.display = 'none'; 
    acessLibras.style.display = 'none'; 
    pluginLibras.style.display = 'none';  // Esconde a DIV
  }
});



  let zoomLevel = 1;
  // Função para aumentar o zoom
const zoomIn = () => {
    zoomLevel += 0.1;
    document.body.style.transform = `scale(${zoomLevel})`;
    document.body.style.transformOrigin = '0 0';
  };
  
  // Função para diminuir o zoom
  const zoomOut = () => {
    zoomLevel -= 0.1;
    if (zoomLevel < 0.5) zoomLevel = 0.5;  // Define o nível de zoom mínimo
    document.body.style.transform = `scale(${zoomLevel})`;
    document.body.style.transformOrigin = '0 0';
  };
  
  // Função para ativar o modo escuro
  const activateDarkMode = () => {
    document.body.style.backgroundColor = '#121212';
    document.body.style.color = '#FFFFFF';
  };
  
  // Função para ativar o modo claro
  const activateLightMode = () => {
    document.body.style.backgroundColor = '#FFFFFF';
    document.body.style.color = '#000000';
  };
  
  // Função para ler o conteúdo da página
  const readPage = () => {
    const content = document.body.innerText; // Obtém o texto da página
    const speech = new SpeechSynthesisUtterance(content); // Cria uma instância para a leitura
    window.speechSynthesis.speak(speech); // Inicia a leitura
  };
  
  // Adicionando os eventos aos botões
  document.getElementById('lupaAumentar').addEventListener('click', zoomIn);
  document.getElementById('lupaDiminuir').addEventListener('click', zoomOut);
  document.getElementById('modoEscuro').addEventListener('click', activateDarkMode);
  document.getElementById('modoClaro').addEventListener('click', activateLightMode);
  document.getElementById('audioDesc').addEventListener('click', readPage);