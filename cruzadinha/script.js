// Definição das células ativas
const celulasCruzadinha = [

  //PALAVRA 1
  {
    dica: 'Qual é a sigla para Central Process Unit?',
    posicoes: [
      { linha: 1, coluna: 2, letra: 'C' },
      { linha: 2, coluna: 2, letra: 'P' },
      { linha: 3, coluna: 2, letra: 'U' }
    ]
  },
  
  //PALAVRA 2
  {
    dica: 'Um circuto digital que realiza operações lógicas e aritméticas. Qual é o nome deste componente?',
    posicoes: [
      { linha: 8, coluna: 7, letra: 'U' },
      { linha: 8, coluna: 8, letra: 'L' },
      { linha: 8, coluna: 9, letra: 'A' }
    ]
  },

  //PALAVRA 3
  {
    dica: 'Tipo de memória que se encontra no topo da hierarquia de memória',
    posicoes: [
      { linha:4, coluna: 5, letra: 'R'},
      { linha:5, coluna: 5, letra: 'E'},
      { linha:6, coluna: 5, letra: 'G'},
      { linha:7, coluna: 5, letra: 'I'},
      { linha:8, coluna: 5, letra: 'S'},
      { linha:9, coluna: 5, letra: 'T'},
      { linha:10, coluna: 5, letra: 'R'},
      { linha:11, coluna: 5, letra: 'A'},
      { linha:12, coluna: 5, letra: 'D'},
      { linha:13, coluna: 5, letra: 'O'},
      { linha:14, coluna: 5, letra: 'R'},
      { linha:15, coluna: 5, letra: 'E'},
      { linha:16, coluna: 5, letra: 'S'}
    ]
  },

  //PALAVRA 4
  {
    dica: 'Tipo de memória volátil que tem como nome Random Acess Memory. Qual é a sigla deste componente?',
    posicoes: [
      { linha:4, coluna: 5, letra: 'R'},
      { linha:4, coluna: 6, letra: 'A'},
      { linha:4, coluna: 7, letra: 'M'}
    ]
  },

  //PALAVRA 5
  {
    dica: 'Tipo de memória não volátil que oferece dados apenas para leitura',
    posicoes: [
      { linha:16, coluna: 2, letra: 'R'},
      { linha:17, coluna: 2, letra: 'O'},
      { linha:18, coluna: 2, letra: 'M'}
    ]
  },

  //PALAVRA 6
  {
    dica: 'Tipo de memória não volátil que precisa ter seu chip exposto a luz ultravioleta para apagar seu conteúdo',
    posicoes: [
      { linha:14, coluna: 2, letra: 'E'},
      { linha:15, coluna: 2, letra: 'P'}
    ]
  },

  //PALAVRA 7
  {
    dica: 'Tipo particular de EEPROM que mantém as informações armazenadas sem a necessidade de uma fonte de energia elétrica',
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
    dica: 'Tipo de memória que precisa ter seu conteúdo copiado na RAM para poder ser executado pela CPU',
    posicoes: [
      { linha: 2, coluna:9, letra: 'M' },
      { linha: 3, coluna:9, letra: 'E' },
      { linha: 4, coluna:9, letra: 'M' },
      { linha: 5, coluna:9, letra: 'Ó' },
      { linha: 6, coluna:9, letra: 'R' },
      { linha: 7, coluna:9, letra: 'I' },
      { linha: 8, coluna:9, letra: 'A' },
      { linha: 9, coluna:9, letra: '-' },
      { linha: 10, coluna:9, letra: 'D' },
      { linha: 11, coluna:9, letra: 'E' },
      { linha: 12, coluna:9, letra: '-' },
      { linha: 13, coluna:9, letra: 'M' },
      { linha: 14, coluna:9, letra: 'A' },
      { linha: 15, coluna:9, letra: 'S' },
      { linha: 16, coluna:9, letra: 'S' },
      { linha: 17, coluna:9, letra: 'A' }
    ]
  },

  //PALAVRA 9
  {
    dica: 'Permite que periféricos acessem diretamente a RAM sem ocupar processamento',
    posicoes: [
      { linha:12, coluna: 5, letra: 'D'},
      { linha:12, coluna: 6, letra: 'M'},
      { linha:12, coluna: 7, letra: 'A'}
    ]
  },

  //PALAVRA 10
  {
    dica: 'Também conhecido como Slave Select (SS). Usado para selecionar um ou um conjunto de circuitos que estão conectados no computador',
    posicoes: [
      { linha:18, coluna: 6, letra: 'C'},
      { linha:18, coluna: 7, letra: 'S'}
    ]
  },

  //PALAVRA 11
  {
    dica: 'Grupo de linhas ou trilhas usadas para se referir a um endereço físico na memória. O número de trilhas determina a quantidade de endereços na memória física',
    posicoes: [
      { linha:16, coluna: 0, letra: 'A'},
      { linha:16, coluna: 1, letra: 'D'},
      { linha:16, coluna: 2, letra: 'R'},
      { linha:16, coluna: 3, letra: 'E'},
      { linha:16, coluna: 4, letra: 'S'},
      { linha:16, coluna: 5, letra: 'S'},
      { linha:16, coluna: 6, letra: '-'},
      { linha:16, coluna: 7, letra: 'B'},
      { linha:16, coluna: 8, letra: 'U'},
      { linha:16, coluna: 9, letra: 'S'}
    ]
  },

  //PALAVRA 12
  {
    dica:   'Também chamado de Memory Bus. É responsável para carregar os dados.',
    posicoes: [
      { linha:11, coluna: 7, letra: 'D'},
      { linha:12, coluna: 7, letra: 'A'},
      { linha:13, coluna: 7, letra: 'T'},
      { linha:14, coluna: 7, letra: 'A'},
      { linha:15, coluna: 7, letra: '-'},
      { linha:16, coluna: 7, letra: 'B'},
      { linha:17, coluna: 7, letra: 'U'},
      { linha:16, coluna: 7, letra: 'S'}
    ]
  },

  //PALAVRA 13
  {
    dica: 'Modelo de processador desenvolvido pela Intel qu teve sua primeira versão lançada em setembro de 2009',
    posicoes: [
      { linha: 7, coluna:9, letra: 'I' },
      { linha: 7, coluna:10, letra: '5' }
    ]
  },

  //PALAVRA 14
  {
    dica:   'Modelo de processador desenvolvido pela Intel qu teve sua primeira versão lançada em novembro de 2008',
    posicoes: [
      { linha: 7, coluna:5, letra: 'I' },
      { linha: 7, coluna:6, letra: '7' }
    ]
  },

  //PALAVRA 15
  {
    dica: 'Tipo de processador que possui dois processadores ou melhor dizendo ‘dois centros, núcleos ou cores de execução‘ no mesmo circuito integrado.  Cada core tem sua própria memória cash e controlador o que permite que funcione mais efetivamente do que um processador single',
    posicoes: [
      { linha: 3, coluna:1, letra: 'D' },
      { linha: 3, coluna:2, letra: 'U' },
      { linha: 3, coluna:3, letra: 'A' },
      { linha: 3, coluna:4, letra: 'L' },
      { linha: 3, coluna:5, letra: '-' },
      { linha: 3, coluna:6, letra: 'C' },
      { linha: 3, coluna:7, letra: 'O' },
      { linha: 3, coluna:8, letra: 'R' },
      { linha: 3, coluna:9, letra: 'E' }
    ]
  },

  //PALAVRA 16
  {
    dica: 'Segue o mesmo princípio de um dual-core, mas agora em teoria tem o dobro da capacidade de processamento',
    posicoes: [
      { linha: 1, coluna:3, letra: 'Q' },
      { linha: 2, coluna:3, letra: 'U' },
      { linha: 3, coluna:3, letra: 'A' },
      { linha: 4, coluna:3, letra: 'D' },
      { linha: 5, coluna:3, letra: '-' },
      { linha: 6, coluna:3, letra: 'C' },
      { linha: 7, coluna:3, letra: 'O' },
      { linha: 8, coluna:3, letra: 'R' },
      { linha: 9, coluna:3, letra: 'E' }
    ]
  }

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
    
    if(respostaEsperada){
      
      total++
      
      if(respostaEncontrada === respostaEsperada){
        corretas++
        input.style.background = '#c4f7c4'
      }else {
        input.style.background = '#f7c4c4'
      }

    }

  });
}
  
function iniciarCruzadinha() {    
  criarTabela('cruzadinha-container', celulasCruzadinha);
}

function iniciar(){
  
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