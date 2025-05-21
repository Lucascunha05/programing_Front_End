// Seleciona os elementos
const btnCalcular = document.getElementById('calcular');
const btnLimpar = document.getElementById('limpar');
const inputPeso = document.getElementById('peso');
const inputAltura = document.getElementById('altura');
const valorImc = document.getElementById('valor-imc');
const statusImc = document.getElementById('status-imc');

btnCalcular.addEventListener('click', () => {
  const peso = parseFloat(inputPeso.value.replace(',', '.'));
  const altura = parseFloat(inputAltura.value.replace(',', '.'));

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    alert('Por favor, insira valores válidos para peso e altura.');
    return;
  }

  // Calcula IMC
  const imc = peso / (altura * altura);
  const imcFixado = imc.toFixed(2);

  // Atualiza valor IMC na página
  valorImc.textContent = imcFixado;

  // Define status do IMC
  let status = '';
  if (imc < 18.5) {
    status = 'Abaixo do peso';
  } else if (imc < 24.9) {
    status = 'Peso normal';
  } else if (imc < 29.9) {
    status = 'Sobrepeso';
  } else if (imc < 34.9) {
    status = 'Obesidade grau I';
  } else if (imc < 39.9) {
    status = 'Obesidade grau II';
  } else {
    status = 'Obesidade grau III';
  }

  statusImc.textContent = status;
});

btnLimpar.addEventListener('click', () => {
  inputPeso.value = '';
  inputAltura.value = '';
  valorImc.textContent = '0';
  statusImc.textContent = '0';
});
