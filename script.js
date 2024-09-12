const questaoElem = document.getElementById("questao");
const option1 = document.getElementById("option-1");
const option2 = document.getElementById("option-2");
const resultadoElem = document.getElementById("resultado");

const aventura = [
    {
        "Pergunta": "Você se depara com um mapa antigo em uma loja. O que você decide fazer?",
        "Opcoes": ["Comprar o mapa e investigar", "Sair da loja sem o mapa"],
        "Resposta": 0
    },
    {
        "Pergunta": "Você encontra um mapa detalhado. A primeira etapa é uma velha mansão. Qual é o seu próximo passo?",
        "Opcoes": ["Explorar a mansão", "Procurar por outro lugar"],
        "Resposta": 0
    },
    {
        "Pergunta": "Dentro da mansão, você encontra dois caminhos: um para a biblioteca e outro para o porão. O que fazer?",
        "Opcoes": ["Ir para a biblioteca", "Ir para o porão"],
        "Resposta": 1
    },
    {
        "Pergunta": "No porão, há uma caixa misteriosa. O que você faz?",
        "Opcoes": ["Abrir a caixa", "Ignorar a caixa e sair"],
        "Resposta": 0
    },
    {
        "Pergunta": "Você encontra uma chave antiga na caixa. Você decide:",
        "Opcoes": ["Usar a chave para abrir uma porta secreta", "Guardar a chave e sair"],
        "Resposta": 0
    },
    {
        "Pergunta": "A porta secreta leva a uma sala com um baú. Você decide:",
        "Opcoes": ["Abrir o baú e pegar o tesouro", "Sair sem abrir o baú"],
        "Resposta": 0
    },
    {
        "Pergunta": "Você encontrou o tesouro! Parabéns, você completou a aventura.",
        "Opcoes": [],
        "Resposta": null
    },
    {
        "Pergunta": "Na biblioteca, você encontra um enigma. Decida o que fazer:",
        "Opcoes": ["Tentar resolver o enigma", "Desistir e sair da mansão"],
        "Resposta": 0
    },
    {
        "Pergunta": "Você tentou resolver o enigma, mas não conseguiu. Sua jornada chega ao fim.",
        "Opcoes": [],
        "Resposta": null
    }
];

let faseAtual = 0;

function mostrarQuestao() {
    if (faseAtual >= aventura.length) {
        resultadoElem.innerText = "Fim da aventura!";
        return;
    }

    const perguntaAtual = aventura[faseAtual];
    questaoElem.innerText = perguntaAtual.Pergunta;
    option1.innerText = perguntaAtual.Opcoes[0] || "";
    option2.innerText = perguntaAtual.Opcoes[1] || "";

    option1.onclick = function() {
        if (perguntaAtual.Resposta === 0) {
            faseAtual++;
            mostrarQuestao();
        } else {
            resultadoElem.innerText = "Resposta errada. Tente novamente.";
        }
    }

    option2.onclick = function() {
        if (perguntaAtual.Resposta === 1) {
            faseAtual++;
            mostrarQuestao();
        } else {
            resultadoElem.innerText = "Resposta errada. Tente novamente.";
        }
    }
}

// Começar o jogo
mostrarQuestao();
