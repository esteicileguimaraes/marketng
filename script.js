// Banco de ideias simples por segmento
const ideias = {
  roupas: "Mostre 3 formas diferentes de combinar a mesma peça de roupa em um vídeo curto de 15 segundos.",
  alimentos: "Poste uma foto do produto saindo do forno com o horário exato da próxima fornada.",
  servicos: "Compartilhe um 'Antes e Depois' do seu atendimento com um depoimento simples do cliente."
};

// Gerador de Ideias
document.getElementById('btn-ideia').addEventListener('click', function() {
  const segmento = document.getElementById('segmento').value;
  const divResultado = document.getElementById('resultado-ideia');
  
  divResultado.innerText = ideias[segmento];
  divResultado.classList.remove('hidden');
});

// Simulador de Desconto
document.getElementById('btn-calcular').addEventListener('click', function() {
  const preco = parseFloat(document.getElementById('preco').value);
  const desconto = parseFloat(document.getElementById('desconto').value);
  const divResultado = document.getElementById('resultado-calculo');

  if (isNaN(preco) || isNaN(desconto) || preco <= 0) {
    divResultado.innerText = "Por favor, insira valores válidos.";
    divResultado.classList.remove('hidden');
    return;
  }

  const valorDesconto = (preco * desconto) / 100;
  const precoFinal = preco - valorDesconto;

  divResultado.innerHTML = `
    <strong>Preço com desconto:</strong> R$ ${precoFinal.toFixed(2)}<br>
    <small>Você está dando R$ ${valorDesconto.toFixed(2)} de desconto por unidade.</small>
  `;
  divResultado.classList.remove('hidden');
});
