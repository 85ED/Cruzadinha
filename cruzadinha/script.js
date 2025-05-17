// Definição das células ativas
const celulasCruzadinha = [

  //PALAVRA 1
  {
    dica: 'Essa palavra interpreta os comandos, faz os cálculos e controla o funcionamento de quase tudo dentro do sistema. Sem essa unidade, o computador não conseguiria pensar nem agir, que palavra é essa?',
    posicoes: [
      { linha: 1, coluna: 2, letra: 'C' },
      { linha: 2, coluna: 2, letra: 'P' },
      { linha: 3, coluna: 2, letra: 'U' }
    ]
  },

  //PALAVRA 2
  {
    dica: 'É uma parte do computador que faz contas e decisões usando números. Qual é o nome desse componente?',
    posicoes: [
      { linha: 8, coluna: 7, letra: 'U' },
      { linha: 8, coluna: 8, letra: 'L' },
      { linha: 8, coluna: 9, letra: 'A' }
    ]
  },

  //PALAVRA 3
  {
    dica: 'É um tipo de memória muito rápida que fica mais próxima do processador. Qual é o nome dessa memória?',
    posicoes: [
      { linha: 4, coluna: 5, letra: 'R' },
      { linha: 5, coluna: 5, letra: 'E' },
      { linha: 6, coluna: 5, letra: 'G' },
      { linha: 7, coluna: 5, letra: 'I' },
      { linha: 8, coluna: 5, letra: 'S' },
      { linha: 9, coluna: 5, letra: 'T' },
      { linha: 10, coluna: 5, letra: 'R' },
      { linha: 11, coluna: 5, letra: 'A' },
      { linha: 12, coluna: 5, letra: 'D' },
      { linha: 13, coluna: 5, letra: 'O' },
      { linha: 14, coluna: 5, letra: 'R' },
      { linha: 15, coluna: 5, letra: 'E' },
      { linha: 16, coluna: 5, letra: 'S' }
    ]
  },

  //PALAVRA 4
  {
    dica: 'Tipo de memória que apaga tudo quando o computador desliga e é conhecida pelo nome em inglês "Random Access Memory". Qual é a sigla dela?',
    posicoes: [
      { linha: 4, coluna: 5, letra: 'R' },
      { linha: 4, coluna: 6, letra: 'A' },
      { linha: 4, coluna: 7, letra: 'M' }
    ]
  },

  //PALAVRA 5
  {
    dica: 'Tipo de memória que não apaga quando o computador desliga e que só dá pra ler as informações, não mudar. Qual é o nome dela?',
    posicoes: [
      { linha: 16, coluna: 2, letra: 'R' },
      { linha: 17, coluna: 2, letra: 'O' },
      { linha: 18, coluna: 2, letra: 'M' }
    ]
  },

  //PALAVRA 6
  {
    dica: 'Tipo de memória que não perde os dados quando o computador desliga, mas pra apagar tudo tem que expor o chip à luz ultravioleta. Qual é o nome dela?',
    posicoes: [
      { linha: 14, coluna: 2, letra: 'E' },
      { linha: 15, coluna: 2, letra: 'P' }
    ]
  },

  //PALAVRA 7
  {
    dica: 'Um tipo especial de memória que guarda as informações mesmo quando o computador está desligado, sem precisar de energia elétrica. Qual é o nome dessa memória?',
    posicoes: [
      { linha: 7, coluna: 8, letra: 'F' },
      { linha: 8, coluna: 8, letra: 'L' },
      { linha: 9, coluna: 8, letra: 'A' },
      { linha: 10, coluna: 8, letra: 'S' },
      { linha: 11, coluna: 8, letra: 'H' }
    ]
  },

  //PALAVRA 8
  {
    dica: 'Tipo de memória que guarda os dados, mas antes de usar, o computador precisa copiar tudo pra outra memória (RAM) para conseguir rodar. Qual é o nome dela?',
    posicoes: [
      { linha: 2, coluna: 9, letra: 'M' },
      { linha: 3, coluna: 9, letra: 'E' },
      { linha: 4, coluna: 9, letra: 'M' },
      { linha: 5, coluna: 9, letra: 'Ó' },
      { linha: 6, coluna: 9, letra: 'R' },
      { linha: 7, coluna: 9, letra: 'I' },
      { linha: 8, coluna: 9, letra: 'A' },
      { linha: 9, coluna: 9, letra: '-' },
      { linha: 10, coluna: 9, letra: 'D' },
      { linha: 11, coluna: 9, letra: 'E' },
      { linha: 12, coluna: 9, letra: '-' },
      { linha: 13, coluna: 9, letra: 'M' },
      { linha: 14, coluna: 9, letra: 'A' },
      { linha: 15, coluna: 9, letra: 'S' },
      { linha: 16, coluna: 9, letra: 'S' },
      { linha: 17, coluna: 9, letra: 'A' }
    ]
  },

  //PALAVRA 9
  {
    dica: 'É um jeito que alguns dispositivos usam para acessar a memória do computador direto, sem precisar pedir ajuda ao “cérebro” (processador). Qual é o nome disso?',
    posicoes: [
      { linha: 12, coluna: 5, letra: 'D' },
      { linha: 12, coluna: 6, letra: 'M' },
      { linha: 12, coluna: 7, letra: 'A' }
    ]
  },

  //PALAVRA 10
  {
    dica: 'Também chamado de Slave Select (SS), é um jeito de escolher um ou vários circuitos que estão ligados ao computador para conversar com eles. Qual é o nome disso?',
    posicoes: [
      { linha: 18, coluna: 6, letra: 'C' },
      { linha: 18, coluna: 7, letra: 'S' }
    ]
  },

  //PALAVRA 11
  {
    dica: 'É um grupo de fios ou caminhos que o computador usa pra indicar um lugar certo na memória. Quanto mais desses fios tiver, mais lugares diferentes ele consegue achar. Qual é o nome disso?',
    posicoes: [
      { linha: 16, coluna: 0, letra: 'A' },
      { linha: 16, coluna: 1, letra: 'D' },
      { linha: 16, coluna: 2, letra: 'R' },
      { linha: 16, coluna: 3, letra: 'E' },
      { linha: 16, coluna: 4, letra: 'S' },
      { linha: 16, coluna: 5, letra: 'S' },
      { linha: 16, coluna: 6, letra: '-' },
      { linha: 16, coluna: 7, letra: 'B' },
      { linha: 16, coluna: 8, letra: 'U' },
      { linha: 16, coluna: 9, letra: 'S' }
    ]
  },

  //PALAVRA 12
  {
    dica: 'Também chamado de Memory Bus, é o caminho por onde os dados viajam dentro do computador. Qual é o nome disso?',
    posicoes: [
      { linha: 11, coluna: 7, letra: 'D' },
      { linha: 12, coluna: 7, letra: 'A' },
      { linha: 13, coluna: 7, letra: 'T' },
      { linha: 14, coluna: 7, letra: 'A' },
      { linha: 15, coluna: 7, letra: '-' },
      { linha: 16, coluna: 7, letra: 'B' },
      { linha: 17, coluna: 7, letra: 'U' },
      { linha: 16, coluna: 7, letra: 'S' }
    ]
  },

  //PALAVRA 13
  {
    dica: 'Um tipo de processador feito pela Intel que foi lançado pela primeira vez em setembro de 2009. Qual é o nome dele?',
    posicoes: [
      { linha: 7, coluna: 9, letra: 'I' },
      { linha: 7, coluna: 10, letra: '5' }
    ]
  },

  //PALAVRA 14
  {
    dica: 'Um tipo de processador feito pela Intel que saiu pela primeira vez em novembro de 2008. Qual é o nome dele?',
    posicoes: [
      { linha: 7, coluna: 5, letra: 'I' },
      { linha: 7, coluna: 6, letra: '7' }
    ]
  },

  //PALAVRA 15
  {
    dica: 'Um tipo de processador que tem dois “cérebros” (ou núcleos) dentro do mesmo chip. Cada um tem sua própria memória rápida e controle, o que faz ele trabalhar melhor do que um que só tem um núcleo. Qual é o nome disso?',
    posicoes: [
      { linha: 3, coluna: 1, letra: 'D' },
      { linha: 3, coluna: 2, letra: 'U' },
      { linha: 3, coluna: 3, letra: 'A' },
      { linha: 3, coluna: 4, letra: 'L' },
      { linha: 3, coluna: 5, letra: '-' },
      { linha: 3, coluna: 6, letra: 'C' },
      { linha: 3, coluna: 7, letra: 'O' },
      { linha: 3, coluna: 8, letra: 'R' },
      { linha: 3, coluna: 9, letra: 'E' }
    ]
  },

  //PALAVRA 16
  {
    dica: 'Funciona igual ao processador com dois núcleos, mas aqui ele tem quatro núcleos, ou seja, em teoria consegue trabalhar com o dobro de tarefas ao mesmo tempo. Qual é o nome disso',
    posicoes: [
      { linha: 1, coluna: 3, letra: 'Q' },
      { linha: 2, coluna: 3, letra: 'U' },
      { linha: 3, coluna: 3, letra: 'A' },
      { linha: 4, coluna: 3, letra: 'D' },
      { linha: 5, coluna: 3, letra: '-' },
      { linha: 6, coluna: 3, letra: 'C' },
      { linha: 7, coluna: 3, letra: 'O' },
      { linha: 8, coluna: 3, letra: 'R' },
      { linha: 9, coluna: 3, letra: 'E' }
    ]
  },

  //PALAVRA 17
  {
    dica: 'Essa pequena memória ultrarrápida armazena dados e instruções usados com frequência para acelerar o acesso do processador, melhorando o desempenho do sistema. Que palavra é essa?',
    posicoes: [
      { linha: 1, coluna: 4, letra: 'C' },
      { linha: 1, coluna: 5, letra: 'A' },
      { linha: 1, coluna: 6, letra: 'C' },
      { linha: 1, coluna: 7, letra: 'H' },
      { linha: 1, coluna: 8, letra: 'E' },
    ]
  },

  //PALAVRA 18
  {
    dica: 'Qual componente do processador determina a velocidade de execução das instruções, medindo ciclos por segundo em megahertz ou gigahertz?',
    posicoes: [
      { linha: 5, coluna: 2, letra: 'C' },
      { linha: 6, coluna: 2, letra: 'L' },
      { linha: 7, coluna: 2, letra: 'O' },
      { linha: 8, coluna: 2, letra: 'C' },
      { linha: 9, coluna: 2, letra: 'K' },
    ]
  },

  //PALAVRA 19
  {
    dica: 'Pequeno computador em um único chip, projetado para controlar dispositivos específicos.',
    posicoes: [
      { linha: 4, coluna: 4, letra: 'M' },
      { linha: 5, coluna: 4, letra: 'I' },
      { linha: 6, coluna: 4, letra: 'C' },
      { linha: 7, coluna: 4, letra: 'R' },
      { linha: 8, coluna: 4, letra: 'O' },
      { linha: 9, coluna: 4, letra: 'C' },
      { linha: 10, coluna: 4, letra: 'O' },
      { linha: 11, coluna: 4, letra: 'N' },
      { linha: 12, coluna: 4, letra: 'T' },
      { linha: 13, coluna: 4, letra: 'R' },
      { linha: 14, coluna: 4, letra: 'O' },
      { linha: 15, coluna: 4, letra: 'L' },
      { linha: 16, coluna: 4, letra: 'A' },
      { linha: 17, coluna: 4, letra: 'D' },
      { linha: 18, coluna: 4, letra: 'O' },
      { linha: 19, coluna: 4, letra: 'R' },

    ]
  },

];

//Variavél que mapeia as primeiras letras das palavras
const primeirasLetras = celulasCruzadinha.map(celula => celula.posicoes[0]);

//Função que define o tamanho máximo de linhas e colunas para a tabela da cruzadinha com base no tamanho das palavras
function definirTamanhoTabela(celulas) {

  let maximolinhas = 0, maximoColunas = 0;

  celulas.forEach(palavra => {

    palavra.posicoes.forEach(celula => {

      if (celula.linha > maximolinhas) maximolinhas = celula.linha;
      if (celula.coluna > maximoColunas) maximoColunas = celula.coluna;

    });

  });

  return { linhas: maximolinhas + 2, colunas: maximoColunas + 2 };

}

//Função para criar a tabela com as celulas e tamanho correto
function criarTabela(idContainer, palavras) {
  let container = document.getElementById(idContainer);
  let { linhas, colunas } = definirTamanhoTabela(palavras);
  let tabela = document.createElement('table');

  const celulasIniciais = new Map();

  primeirasLetras.forEach((celula, index) => {
    const chave = `${celula.linha},${celula.coluna}`;
    if (!celulasIniciais.has(chave)) {
      celulasIniciais.set(chave, []);
    }
    celulasIniciais.get(chave).push(index + 1); // +1 porque os índices começam em 0
  });

  for (let i = 0; i < linhas; i++) {
    let linha = document.createElement('tr');

    for (let j = 0; j < colunas; j++) {
      let coluna = document.createElement('td');
      let verificacaoLetra = palavras.flatMap(palavra => palavra.posicoes).find(palavra => palavra.linha === i && palavra.coluna === j);

      if (verificacaoLetra) {
        let input = document.createElement('input');
        input.maxLength = 1;
        input.dataset.linha = i;
        input.dataset.coluna = j;
        input.dataset.answer = verificacaoLetra.letra.toUpperCase();

        // Verificar se é uma célula inicial
        const chave = `${i},${j}`;
        if (celulasIniciais.has(chave)) {
          const numeros = celulasIniciais.get(chave);

          let divNumero = document.createElement('div');
          divNumero.className = 'number-badge';
          divNumero.textContent = numeros.join('/'); // Formato "1/2" para múltiplas palavras

          coluna.appendChild(divNumero)

          input.className = 'has-badge'
        }

        coluna.appendChild(input);
      } else {
        coluna.classList.add('black');
      }

      linha.appendChild(coluna);
    }

    tabela.appendChild(linha);
  }

  container.appendChild(tabela);
}

//Função para verificar as respostas escritas nas celulas
function verificarRespostas() {

  let inputs = document.querySelectorAll('input');

  let corretas = 0
  let total = 0

  inputs.forEach(input => {

    const respostaEsperada = input.dataset.answer.toUpperCase();
    const respostaEncontrada = input.value.toUpperCase();

    if (respostaEsperada) {

      total++

      if (respostaEncontrada === respostaEsperada) {
        corretas++
        input.style.background = '#c4f7c4'
      } else {
        input.style.background = '#f7c4c4'
      }

    }

  });
}

function iniciarCruzadinha() {
  criarTabela('cruzadinha-container', celulasCruzadinha);
}

function iniciar() {

  let conteudo = document.getElementById("conteudo")
  let informacoes = document.getElementById("informacoes")

  informacoes.style.display = "none"
  iniciarCruzadinha()
  conteudo.style.display = "flex"

  let botao_iniciar = document.getElementById("botao_cruzadinha_iniciar")
  let botao_verificar = document.getElementById("botao_cruzadinha_verificar")

  botao_iniciar.style.display = "none"
  botao_verificar.style.display = "flex"

}



