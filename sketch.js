let campoIdade;
let campoRealismo;
let campoJogabilidade;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de jogos esportivos");
  createSpan("Sua idade:");
  campoIdade = createInput("12");
  campoRealismo = createCheckbox("Gosta de realismo?");
  campoJogabilidade = createCheckbox("Gosta de jogabilidade?");
}

function draw() {
  background(" rgb(81,93,185)");
  let idade = campoIdade.value();
  let gostaDeRealismo = campoRealismo.checked();
  let gostaDeJogabilidade = campoJogabilidade.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeRealismo, gostaDeJogabilidade);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(40);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeRealismo, gostaDeJogabilidade) {
  if (idade >= 12) {
    if (idade >= 10) {
      return "Fifa 17";
    } else {
      if (idade >= 12) {
        if(gostaDeRealismo || gostaDeJogabilidade) {
          return "eFootball 2024";          
        } else{
         return "Tony Hawk's Pro Skater 3";
        }
      } else {
        if (gostaDeRealismo) {
          return "PES 2017";
        } else {
          return "F1 2011";
        }
      }
    }
  } else {
    if (gostaDeRealismo) {
      return "Spike Volleyball";
    } else {
      return "Nba2k25";
    }
  }
}
