window.onload = configurarPagina;

function configurarPagina() {
    let frases = [
        "Que a Força esteja com você.",
        "Ao infinito e além!",
        "Não há lugar como o nosso lar.",
        "Temos que te mandar de volta para o futuro!",
        "Sem compaixão!",
        "Isso, isso, isso...",
        "Ela tá tão na sua...",
        "Eu já joguei todos esses jogos!",
        "Todos merecem ser aplaudidos de pé uma vez na vida.",
        "Why so serious?",
        "Bond, James Bond.",
        "Eu vejo gente morta.",
        "Hasta la vista, baby!",
        "Eu vou fazer uma proposta que ele não poderá recusar.",
        "Eu vou te dar a escolha que eu nunca tive.",
        "Johnny!",
        "Meu precioso...",
        "Ó capitão! Meu capitão!",
        "Você gosta de filmes de terror?",
        "Estou sendo indiciado! Indiciado!",
        "Pede pra sair!",
        "Francamente, minha querida, eu não dou a mínima.",
        "Diamonds are a girls' best friends.",
        "Elementar, meu caro Watson."
    ];
    let indice = Math.floor(Math.random() * frases.length);
    document.getElementById("frase-dia").innerText = frases[indice];
}

function filtrarCatalogo(idade, humor, genero, duracao, formato) {
    let catalogo = [
        { titulo: "Shrek", idadeMinima: 0, humor: "feliz", genero: "comedia", duracao: "medio", formato: "animacao" },
        { titulo: "Toy Story 4", idadeMinima: 0, humor: "feliz", genero: "comedia", duracao: "longo", formato: "animacao" },
        { titulo: "Bluey (Série)", idadeMinima: 0, humor: "feliz", genero: "comedia", duracao: "curto", formato: "animacao" },
        { titulo: "Chaves (Série)", idadeMinima: 0, humor: "feliz", genero: "comedia", duracao: "curto", formato: "live-action" },
        { titulo: "Gente Grande", idadeMinima: 0, humor: "feliz", genero: "comedia", duracao: "medio", formato: "live-action" },
        { titulo: "As Crônicas de Nárnia", idadeMinima: 0, humor: "feliz", genero: "comedia", duracao: "longo", formato: "live-action" },
        { titulo: "Divertida Mente", idadeMinima: 0, humor: "feliz", genero: "drama", duracao: "medio", formato: "animacao" },
        { titulo: "Up: Altas Aventuras", idadeMinima: 0, humor: "feliz", genero: "drama", duracao: "longo", formato: "animacao" },
        { titulo: "De Volta para o Futuro", idadeMinima: 0, humor: "feliz", genero: "acao", duracao: "longo", formato: "live-action" },
        { titulo: "Sempre ao Seu Lado", idadeMinima: 0, humor: "tenso", genero: "drama", duracao: "medio", formato: "live-action" },
        { titulo: "A Viagem de Chihiro", idadeMinima: 0, humor: "tenso", genero: "drama", duracao: "medio", formato: "animacao" },
        { titulo: "Kung Fu Panda", idadeMinima: 0, humor: "feliz", genero: "acao", duracao: "medio", formato: "animacao" },
        { titulo: "Carros 3", idadeMinima: 0, humor: "feliz", genero: "acao", duracao: "longo", formato: "animacao" },
        { titulo: "Pica-Pau (Série)", idadeMinima: 0, humor: "feliz", genero: "acao", duracao: "curto", formato: "animacao" },
        { titulo: "Micael (Série)", idadeMinima: 0, humor: "feliz", genero: "drama", duracao: "curto", formato: "animacao" },
        { titulo: "Todo Mundo Odeia o Chris (Série)", idadeMinima: 0, humor: "feliz", genero: "drama", duracao: "curto", formato: "live-action" },
        { titulo: "O Diário de Marley", idadeMinima: 0, humor: "feliz", genero: "drama", duracao: "medio", formato: "live-action" },
        { titulo: "Power Rangers (Série)", idadeMinima: 0, humor: "feliz", genero: "acao", duracao: "curto", formato: "live-action" },
        { titulo: "Karatê Kid", idadeMinima: 0, humor: "feliz", genero: "acao", duracao: "medio", formato: "live-action" },
        { titulo: "Scooby-Doo (Série)", idadeMinima: 0, humor: "tenso", genero: "comedia", duracao: "curto", formato: "animacao" },
        { titulo: "Hotel Transilvânia", idadeMinima: 0, humor: "tenso", genero: "comedia", duracao: "medio", formato: "animacao" },
        { titulo: "Monstros vs Alienígenas", idadeMinima: 0, humor: "tenso", genero: "comedia", duracao: "longo", formato: "animacao" },
        { titulo: "Chaves em Desenho (Série)", idadeMinima: 0, humor: "feliz", genero: "comedia", duracao: "curto", formato: "animacao" },
        { titulo: "Paddington 2", idadeMinima: 0, humor: "tenso", genero: "comedia", duracao: "medio", formato: "live-action" },
        { titulo: "Os Caça-Fantasmas", idadeMinima: 0, humor: "tenso", genero: "comedia", duracao: "longo", formato: "live-action" },
        { titulo: "Historietas Assombradas (Série)", idadeMinima: 0, humor: "tenso", genero: "comedia", duracao: "curto", formato: "live-action" },
        { titulo: "O Segredo Além do Jardim (Série)", idadeMinima: 0, humor: "tenso", genero: "drama", duracao: "curto", formato: "animacao" },
        { titulo: "O Menino e o Mundo", idadeMinima: 0, humor: "tenso", genero: "drama", duracao: "longo", formato: "animacao" },
        { titulo: "Desventuras em Série (Série)", idadeMinima: 0, humor: "tenso", genero: "drama", duracao: "curto", formato: "live-action" },
        { titulo: "Titanic", idadeMinima: 0, humor: "tenso", genero: "drama", duracao: "longo", formato: "live-action" },
        { titulo: "Ben 10 (Série)", idadeMinima: 0, humor: "tenso", genero: "acao", duracao: "curto", formato: "animacao" },
        { titulo: "Coraline", idadeMinima: 0, humor: "tenso", genero: "acao", duracao: "medio", formato: "animacao" },
        { titulo: "Kubo e as Cordas Mágicas", idadeMinima: 0, humor: "tenso", genero: "acao", duracao: "longo", formato: "animacao" },
        { titulo: "Doctor Who (Série)", idadeMinima: 0, humor: "tenso", genero: "acao", duracao: "curto", formato: "live-action" },
        { titulo: "Jurassic Park", idadeMinima: 0, humor: "tenso", genero: "acao", duracao: "medio", formato: "live-action" },
        { titulo: "Piratas do Caribe", idadeMinima: 0, humor: "tenso", genero: "acao", duracao: "longo", formato: "live-action" },
        { titulo: "Avatar: A Lenda de Aang (Série)", idadeMinima: 10, humor: "feliz", genero: "acao", duracao: "curto", formato: "animacao" },
        { titulo: "Extraordinário", idadeMinima: 10, humor: "feliz", genero: "drama", duracao: "medio", formato: "live-action" },
        { titulo: "Interestelar", idadeMinima: 10, humor: "tenso", genero: "drama", duracao: "longo", formato: "live-action" },
        { titulo: "Modern Family (Série)", idadeMinima: 12, humor: "feliz", genero: "comedia", duracao: "curto", formato: "live-action" },
        { titulo: "As Branquelas", idadeMinima: 12, humor: "feliz", genero: "comedia", duracao: "medio", formato: "live-action" },
        { titulo: "Brooklyn Nine-Nine (Série)", idadeMinima: 12, humor: "feliz", genero: "comedia", duracao: "curto", formato: "live-action" },
        { titulo: "Intocáveis", idadeMinima: 12, humor: "feliz", genero: "drama", duracao: "medio", formato: "live-action" },
        { titulo: "Vingadores: Guerra Infinita", idadeMinima: 12, humor: "feliz", genero: "acao", duracao: "longo", formato: "live-action" },
        { titulo: "Wandinha (Série)", idadeMinima: 12, humor: "tenso", genero: "comedia", duracao: "curto", formato: "live-action" },
        { titulo: "The Flash (Série)", idadeMinima: 12, humor: "feliz", genero: "acao", duracao: "curto", formato: "live-action" },
        { titulo: "Guardiões da Galáxia", idadeMinima: 12, humor: "feliz", genero: "acao", duracao: "medio", formato: "live-action" },
        { titulo: "The Good Place (Série)", idadeMinima: 12, humor: "tenso", genero: "comedia", duracao: "curto", formato: "live-action" },
        { titulo: "Os Simpósios (Série)", idadeMinima: 12, humor: "tenso", genero: "comedia", duracao: "curto", formato: "animacao" },
        { titulo: "Anne with an E (Série)", idadeMinima: 12, humor: "tenso", genero: "drama", duracao: "curto", formato: "live-action" },
        { titulo: "Enola Holmes", idadeMinima: 12, humor: "tenso", genero: "acao", duracao: "medio", formato: "live-action" },
        { titulo: "Homem-Aranha: De Volta ao Lar", idadeMinima: 12, humor: "tenso", genero: "acao", duracao: "longo", formato: "live-action" },
        { titulo: "Stranger Things (Série)", idadeMinima: 14, humor: "tenso", genero: "acao", duracao: "curto", formato: "live-action" },
        { titulo: "Invocação do Mal", idadeMinima: 14, humor: "tenso", genero: "acao", duracao: "medio", formato: "live-action" },
        { titulo: "Matrix", idadeMinima: 14, humor: "tenso", genero: "acao", duracao: "longo", formato: "live-action" },
        { titulo: "Friends (Série)", idadeMinima: 14, humor: "feliz", genero: "comedia", duracao: "curto", formato: "live-action" },
        { titulo: "La Casa de Papel (Série)", idadeMinima: 16, humor: "tenso", genero: "acao", duracao: "curto", formato: "live-action" },
        { titulo: "Round 6 (Série)", Play: 16, idadeMinima: 16, humor: "tenso", genero: "acao", duracao: "curto", formato: "live-action" },
        { titulo: "O Iluminado", idadeMinima: 16, humor: "tenso", genero: "acao", duracao: "longo", formato: "live-action" },
        { titulo: "John Wick: De Volta ao Jogo", idadeMinima: 16, humor: "tenso", genero: "acao", duracao: "longo", formato: "live-action" }
    ];

    for (let i = 0; i < catalogo.length; i++) {
        let filme = catalogo[i];
        if (idade >= filme.idadeMinima && humor === filme.humor && genero === filme.genero && formato === filme.formato) {
            if (duracao === "qualquer" || duracao === filme.duracao) {
                return "Recomendamos: " + filme.titulo;
            }
        }
    }

    for (let i = 0; i < catalogo.length; i++) {
        let filme = catalogo[i];
        if (idade >= filme.idadeMinima && humor === filme.humor) {
            return "Com base na sua idade e humor, recomendamos: " + filme.titulo;
        }
    }

    return "Recomendamos assistir ao clássico absoluto: Shrek!";
}

function recomendarFilme() {
    let campoIdade = parseInt(document.getElementById("input-idade").value);
    let campoHumor = document.getElementById("selecao-humor").value;
    let campoGenero = document.getElementById("selecao-genero").value;
    let campoDuracao = document.getElementById("selecao-duracao").value;
    let campoFormato = document.getElementById("selecao-formato").value;

    if (!campoIdade && campoIdade !== 0) {
        document.getElementById("resultado").innerText = "Por favor, digite sua idade.";
        return;
    }

    let resultadoFinal = filtrarCatalogo(campoIdade, campoHumor, campoGenero, campoDuracao, campoFormato);
    
    document.getElementById("resultado").innerText = resultadoFinal;
}