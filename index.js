function calcular(event) {
  event.preventDefault();

  const valorInput = document.getElementById("valor");
  const valorOutput = document.getElementById("valorTotal");
  const valorOutput2 = document.getElementById("valorOriginal");
  const porcentagemInput = document.getElementById("Porcentagem");
  const gorjeta = document.getElementById("gorjeta");

  const valorInserir = Number(valorInput.value).toFixed(2);
  const porcentagemInserir = Number(porcentagemInput.value).toFixed(2);

  let valorGorjeta = (valorInserir / 100) * porcentagemInserir;

  gorjeta.textContent = `R$ ${valorGorjeta.toFixed(2)}`;
  valorOutput.textContent = `R$ ${valorInserir}`;
  valorOutput2.textContent = `R$ ${valorInserir}`;
}
