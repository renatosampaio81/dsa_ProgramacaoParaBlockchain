// Projeto - Pig Dice Game

/*

Regras do Jogo

- O jogo tem 2 jogadores, jogando em rodadas.
- Em cada rodada, um jogador joga um dado quantas vezes quiser. Cada resultado é adicionado à sua pontuação.
- Mas, se o jogador obtiver o valor 1 ao jogar o dado, toda a sua pontuação será perdida naquela rodada. Depois disso, é a vez do próximo jogador.
- O jogador pode optar por 'Passar a vez', o que significa que sua pontuação atual é adicionada à sua pontuação global. Depois disso, é a vez do próximo jogador.
- O primeiro jogador a atingir 100 pontos na pontuação global vence o jogo.

*/

var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none'; //oculta a figura do dado

document.querySelector('.btn-roll').addEventListener('click', function(){

        // 1- Número randômico 
        var dice = Math.floor(Math.random() * 6) + 1;

        // 2- Mostra o resultado
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        // 3- Atualiza a pontuação da rodada SE o número rolado NÃO for 1
        if (dice !== 1) {
                roundScore += dice;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
                //Se o activeplayer for 0, muda pra 1 (e vice versa)
                activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
                roundScore = 0;

                document.getElementById('current-0').textContent = '0';
                document.getElementById('current-1').textContent = '0';

                document.querySelector('.player-0-panel').classList.toggle('active'); //o toggle inverte o active, ou seja, se estiver ativo ele desativa e vice versa.
                document.querySelector('.player-1-panel').classList.toggle('active');

                //document.querySelector('.dice').style.display = 'none';

        }
});