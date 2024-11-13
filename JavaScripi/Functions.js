// manipulação dos objetos DOM ( Document Object MOdel)
// Representação de dados dos objetos que compõem uma estrutura
//e o conteúdo de um documento web

// Essencial para interagir com elementos de uma página
//ocument.querySelector()

// Exemplo

const titulo = document.querySelector ('h1');
titulo.textContent = 'Texto Modificado'; // M odifica o texto do elemento

// Uso principal: Buscar e modificar elementos HTML

//Document.createElement()
//Criar novos elementos dinamicamentes 
// Exemplo:

const novoElemento = document.createElement ('p');
novoElemento.textContent = 'Parágrafo Adicionado'
document.body.appendChild(novoElemento);

// Uso principal: Adicionar novos elementos ao DOM

//addEventListener()
// Funções que lidam com interações dos usuários
// Sua função é adicionar um ouvinte para eventos (como cliques)

const botao = document.querySelector('button');
botao.addEventListener('click', () => { alert('Botão Clicado!');

}
);
// Uso principal: Criar interatividade, como cliques ou movimentos do mouse

// setTimeout()
// Controlam ações que ocorrem em intervalos ou após um tempo

// Executam um função após um periodo de tempo (unidade de medida > milisegundos)

setTimeout(() => {
    alert('Executado após 2 segundos!');
},2000);


// uso principal: atrasar execuções ou criar temporizadores
