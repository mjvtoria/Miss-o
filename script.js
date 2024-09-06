const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual tipo de enigma você mais gosta de resolver?",
        alternativas: [
            {
                texto: " Quebra-cabeças lógicos e matemáticos",
                afirmacao: "Jogos que exigem uma abordagem analítica e estratégica são a sua praia."
            },
            {
                texto: "Mistérios e enigmas narrativos",
                afirmacao: "Jogos que misturam mistério e enredo envolvente são os que mais atraem seu interesse."

            }
           
        ]
    },
    {
        enunciado: "Como você prefere que os enigmas sejam apresentados?",
        alternativas: [
            {
                texto: "Desafios individuais",
                afirmacao: "Você aprecia desafios que podem ser resolvidos um a um, sem muitas complicações adicionais."
            },
            {
                texto: "Puzzles integrados em uma trama maior",
                afirmacao: "O melhor para você são enigmas que fazem parte de uma narrativa contínua e que se interligam com o enredo geral do jogo. A resolução de enigmas ajuda a desenvolver a história e desvendar mistérios."
            }
           
        ]
    },
    {
        enunciado: "Qual é o nível de dificuldade que você busca em um jogo de enigma?",
        alternativas: [
            {
                texto: "Desafios complexos e difíceis",
                afirmacao:"Jogos que ofereçam enigmas particularmente difíceis e desafiadores, que exigem pensamento crítico e paciência para serem resolvidos."

            },
            {
                texto: "Desafios moderados e acessíveis",
                afirmacao:"Para você o melhor são interessantes e desafiadores, mas não tão difíceis a ponto de serem frustrantes. Você aprecia uma dificuldade equilibrada que oferece satisfação sem ser excessivamente complexa."
            }
        ]
    }
];

let atual= 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta (){
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas [atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
    const botaoAlternativa = document.createElement("button");
    botaoAlternativa.textContent = alternativa.texto; 
    botaoAlternativa.addEventListener("click", ()=>respostaSelecionada (alternativa));
    caixaAlternativas.appendChild(botaoAlternativa);
    }
    
}   
    function respostaSelecionada (opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + "";
    atual++
    mostraPergunta();
    }

function mostraResultado() {    
    caixaPerguntas.textContent = "Resumindo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    }

    mostraPergunta();
    