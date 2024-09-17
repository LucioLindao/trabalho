const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como o desmatamento afeta a biodiversidade?",
        alternativas: [           
            {
                texto: "O desmatamento reduz o habitat natural de diversas espécies,levando à extinção de muitas delas.",
                afirmacao: "A destruição de florestas altera o equilíbrio dos ecossistemas e afeta a vida animal e vegetal>"
            },
            {
                texto:  "A fragmentação dos ecossistemas impede o fluxo genético entre populações de espécies,comprometendo a biodiversidade.",
                afirmacao: "O desmatamento contribui diretamente para a perda de biodiversidade global."
            }
        ]
    },
    
    {
        enunciado: "quais são os principais gases responsáveis pelo aquecimento global?",
        alternativas: [           
            {
                texto: "O dióxido de carbono (CO2) é um dos principais gases de efeito estufa que contribuem para o aquecimento global.",
                afirmacao: "A emissão excessiva de gases de efeito estufa está acelerando as mudanças climáticas."
            },
            {
                texto:  "o metano (CH4)também é um gás de efeito estufa significativo, sendo liberado principalmente pela agropecuária e decomposição de resíduos.",
                afirmacao: "A queima de combustíveis fósseis é uma da smaiores fontes de dióxido de carbono na atmosfera."
            }
        ]
    },
    {
        enunciado: "Quais são os benefícios das energias renováveis para o meio ambiente?",
        alternativas: [           
            {
                texto: "Energia renováveis, como  solar e eólica, reduzem a emissão de gases poluentes,ajudando a combater o aquecimento global.",
                afirmacao: "O uso de energias renováveis contribuí para a diminuição da poluição do ar e da água."
            },
            {
                texto:  "Fontes de energia renováveis são sustentáveis e ajudam a conservar os recursos naturais para as futuras gerações.",
                afirmacao: "investir em energias limpas é essencial para mitigar os efeitos das mudanças climáticas."
            }
        ]

    },
]
    // adicione acima as pergundas substituindo as originais
    let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Suas ações mudam o mundo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent  = "";
}

mostraPergunta(); 