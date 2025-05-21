# programing_Front_End

FACEF – Programing in FrontEnd 

No desenvolvimento da página para cálculo do IMC, fiz algumas melhorias importantes para garantir o funcionamento correto da funcionalidade. 

Primeiramente, no código HTML, corrigi os elementos responsáveis por mostrar o resultado do IMC. Antes, os valores eram exibidos em spans sem identificadores, o que impedia o JavaScript de encontrar e atualizar o conteúdo dinamicamente. Então, acrescentei os atributos id="valor-imc" e id="status-imc" nos spans correspondentes, para que o script pudesse manipular esses elementos corretamente. 

Depois, criei um arquivo JavaScript separado, chamado imc.js, para organizar melhor o código. Nesse arquivo, selecionei os campos de peso e altura, os botões de calcular e limpar, e os spans de resultado usando os seus IDs. Implementei a lógica para calcular o IMC ao clicar no botão “Calcular”, validando os valores inseridos e exibindo o resultado com duas casas decimais. Além disso, adicionei uma classificação do status do IMC conforme os padrões conhecidos (abaixo do peso, peso normal, sobrepeso, obesidade, etc.). 

Também incluí o botão “Limpar” que reseta os campos e os resultados, garantindo uma melhor experiência para o usuário. 

Por fim, no arquivo HTML, inseri a referência para esse script externo, utilizando o atributo defer para que o carregamento do JavaScript não bloqueie a renderização da página. 

Com essas alterações, o cálculo do IMC passou a funcionar corretamente, exibindo o valor calculado e o status correspondente dinamicamente, tornando a página mais funcional e organizada. 

 
 

 

Lucas Henrique Andrade Cunha - 40928 
