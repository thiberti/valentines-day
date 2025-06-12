let musicaTocando = false;

const audio = document.getElementById("musica-fundo");
const musicas = [
  "audios/musica1.mp3",
  "audios/musica2.mp3",
  "audios/musica3.mp3",
  "audios/musica4.mp3",
  "audios/musica5.mp3"
];

// Toca uma música aleatória ao iniciar
function tocarMusicaAleatoria() {
  if (!musicaTocando) {
    const aleatoria = musicas[Math.floor(Math.random() * musicas.length)];
    audio.src = aleatoria;
    audio.play().catch((e) => {
      console.warn("Erro ao tentar tocar a música:", e);
    });
    musicaTocando = true;
  }
}


const surpresas = [
  { tipo: 'imagem', src: 'imagens/1.jpg', frase: 'Ihihi, lembra dessa foto? Foi aqui que tudo começou!😁 \n Nesse dia a gente meio que tinha combinado que seria só um rolê legal e sem compromisso (HAHA até parece que eu não te queria (Ps.: Uma gatinha dessas😻))' },
  { tipo: 'imagem', src: 'imagens/2.jpg', frase: 'Quando você entrou na minha vida tudo mudou tão rápido que nem pude me dar conta que mesmo sem perceber em poucas semanas juntos e eu já tava pensando tudo em casal rs. (Ps.: AAAAAA EU TE AMO DEMAIS GAROTA❤️‍🔥)' },
  { tipo: 'video', src: 'videos/video1.mp4', frase: 'Você é aquela pessoa que meu eu interior sempre desejou, mas, nunca soube pedir pro universo✨, mas, graças a Deus ele entendeu que era você🙏. Alguém que topasse todas minhas loucuras🥰' },
  { tipo: 'imagem', src: 'imagens/4.jpg', frase: 'Prometo continuar te escolhendo todo dia 💍 e continuar te dizendo que é uma grande GOSTOSA a todo momento, porque é verdade e você sabe disso 😘. (Ps.: Deixa eu ter razão pelo menos dessa vez hihi😅)' },
  { tipo: 'imagem', src: 'imagens/5.jpg', frase: 'Você sempre me diz que não se importa se eu estou de cabelo grande, curto, com ou sem barba, e que mesmo tendo suas preferências, sempre vai me amar (Ps.: Mesmo que eu não tivesse nenhum dente, sim eu lembro de quando eu perguntei isso hahahaha) e isso me faz te amar ainda mais❤️' },
  { tipo: 'imagem', src: 'imagens/6.jpg', frase: 'Você é minha casa 🏡, meu momento de paz, sem mais...' },
  { tipo: 'imagem', src: 'imagens/7.jpg', frase: 'Amo quando a gente faz biquinho, você do nada me beija com gloss e de repende viramos duas princesas da Disney 💅. Você é meu passado, presente e quero muito que seja meu futuro 😍💘' },
  { tipo: 'video', src: 'videos/video2.mp4', frase: 'Eu acho o máximo quando eu consigo fazer você rir de algo idiota, eu me sinto a pessoa mais sortuda do mundo🌍' },
  { tipo: 'imagem', src: 'imagens/9.jpg', frase: 'Obrigado por existir comigo 🌹, você é a melhor pessoa que eu poderia ter como parceira de vida!🤗' },
  { tipo: 'imagem', src: 'imagens/10.jpg', frase: 'Você é minha história favorita 📖 e o melhor capítulo ainda está por vir.' },
  { tipo: 'imagem', src: 'imagens/11.jpg', frase: 'Sabe qual é a melhor parte do dia de hoje? Quando tive a chance de me apaixonar por você mais uma vez🥰' },
  { tipo: 'imagem', src: 'imagens/12.jpg', frase: 'Você me entende e faz planos para o futuro comigo, e isso... isso NÃO TEM PREÇO🥹' },
  { tipo: 'imagem', src: 'imagens/13.jpg', frase: 'E no fim... sempre seremos nós 💫 \n EU TE AMO MUIT❤️ minha gatinhaaa' },
  { tipo: 'biscoito' }
];

let index = 0;

function mostrarConteudo() {
  tocarMusicaAleatoria(); // isso deve vir antes
  const div = document.getElementById("conteudo");

  if (index < surpresas.length) {
    const item = surpresas[index];

    if (item.tipo === 'biscoito') {
      mostrarBiscoito();
    } else {
      let media = '';
      if (item.tipo === 'imagem') {
        media = `<img src="${item.src}" alt="Surpresa">`;
      } else if (item.tipo === 'video') {
        media = `<video autoplay loop muted playsinline><source src="${item.src}" type="video/mp4"></video>`;
      }

      div.innerHTML = `
        <div class="conteudo-box">
          ${media}
          <div class="frase-animada" id="frase-digitada"></div>
        </div>
      `;

      digitarTexto(item.frase, "frase-digitada", 40);
    }

    index++;
  } else {
    document.getElementById("botao-surpresa").style.display = 'none';
  }
}

function digitarTexto(texto, elementoId, velocidade) {
  const el = document.getElementById(elementoId);
  let i = 0;
  const intervalo = setInterval(() => {
    if (i < texto.length) {
      el.innerHTML += texto[i] === '\n' ? '<br>' : texto[i];
      i++;
    } else {
      clearInterval(intervalo);
    }
  }, velocidade);
}

let estadoBiscoito = 0;

function mostrarBiscoito() {
  estadoBiscoito = 0;
  document.getElementById("botao-surpresa").style.display = "none";
  const div = document.getElementById("conteudo");
  div.innerHTML = `
    <div class="biscoito-container" onclick="interagirComBiscoito()">
      <img id="biscoito" src="imagens/biscoito-fechado.png" alt="Biscoito da sorte" style="width: 320px; max-width: 80vw; cursor: pointer;" />
      <div id="mensagem-bilhete">Você é minha sorte 🍀minha melhor bagunça, minha pessoa favorita, você é meu Tchan🧛‍♀️🦇, você é Ohana pra mim💙🥹</div>
    </div>
  `;
}

function interagirComBiscoito() {
  const img = document.getElementById("biscoito");
  const bilhete = document.getElementById("mensagem-bilhete");

  if (estadoBiscoito === 0) {
    img.src = "imagens/biscoito-rachado.png";
    estadoBiscoito = 1;
  } else if (estadoBiscoito === 1) {
    img.src = "imagens/biscoito-aberto.png";
    bilhete.style.display = "block";
    estadoBiscoito = 2;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById("botao-surpresa");
  botao.addEventListener("click", () => {
    mostrarConteudo();
  });
});
