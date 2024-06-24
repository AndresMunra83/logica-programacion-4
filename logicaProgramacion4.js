document
  .getElementById("calcularFibonacci")
  .addEventListener("click", function () {
    let numero;
    let boolean = false;

    while (!boolean) {
      numero = prompt(
        "Ingrese un número entero no negativo para calcular su serie Fibonacci:"
      );
      if (numero === null) {
        return;
      }

      numero = parseInt(numero);

      if (!isNaN(numero) && numero >= 0) {
        boolean = true;
      } else {
        alert("Por favor, ingrese un valor numerico entero no negativo");
      }
    }

    const serieFibo = serieFibonacci(numero);
    document.getElementById(
      "result"
    ).textContent = `La serie Fibonacci de ${numero} es : ${serieFibo}.`;
    alert(`la serie Fibonacci de ${numero} es: ${serieFibo}`);
  });

function serieFibonacci(n) {
  let serie = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      serie.push(0);
    } else if (i === 1) {
      serie.push(1);
    } else {
      serie.push(serie[i - 1] + serie[i - 2]);
    }
  }
  return serie;
}
