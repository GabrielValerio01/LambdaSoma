function calculateSum() {
    var n1 = parseFloat(document.getElementById('num1').value);
    var n2 = parseFloat(document.getElementById('num2').value);
    var soma = n1 + n2;
  
    var resultElement = document.getElementById('result');
    resultElement.textContent = soma;
  
    var url = 'https://b6teswhw70.execute-api.sa-east-1.amazonaws.com/default/soma';
    var requestData = {
      num1: n1,
      num2: n2
    };
  
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(requestData)
    })
    .then(response => response.json())
    .then(data => {
      // Tratar a resposta da API (caso necessário)
      console.log(data);
    })
    .catch(error => {
      console.error('Erro na requisição:', error);
    });
  }
  
  calculateSum();
  