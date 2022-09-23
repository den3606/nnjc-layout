
import './styles/style.css';

const leftPlayerScoreReplicant = nodecg.Replicant<number>('leftPlayerScore') || 0;

const leftPlayerPlusElement = document.querySelector<HTMLButtonElement>('#plus-left-player-score');
if (!leftPlayerPlusElement) { throw new Error('selector not found'); }

leftPlayerPlusElement.addEventListener('click', () => {
  leftPlayerScoreReplicant.value = Number(leftPlayerScoreReplicant.value) + 1;
});

const leftPlayerMinusElement = document.querySelector<HTMLButtonElement>('#minus-left-player-score');
if (!leftPlayerMinusElement) { throw new Error('selector not found'); }

leftPlayerMinusElement.addEventListener('click', () => {
  leftPlayerScoreReplicant.value = Number(leftPlayerScoreReplicant.value) - 1;
});


const rightPlayerScoreReplicant = nodecg.Replicant<number>('rightPlayerScore') || 0;

const rightPlayerPlusElement = document.querySelector<HTMLButtonElement>('#plus-right-player-score');
if (!rightPlayerPlusElement) { throw new Error('selector not found'); }

rightPlayerPlusElement.addEventListener('click', () => {
  rightPlayerScoreReplicant.value = Number(rightPlayerScoreReplicant.value) + 1;
});

const rightPlayerMinusElement = document.querySelector<HTMLButtonElement>('#minus-right-player-score');
if (!rightPlayerMinusElement) { throw new Error('selector not found'); }

rightPlayerMinusElement.addEventListener('click', () => {
  rightPlayerScoreReplicant.value = Number(rightPlayerScoreReplicant.value) - 1;
});

// 初期化
const scoreResetElement = document.querySelector<HTMLButtonElement>('#reset-player-score');
if (!scoreResetElement) { throw new Error('selector not found'); }
scoreResetElement.addEventListener('click', () => {
  leftPlayerScoreReplicant.value = 0;
  rightPlayerScoreReplicant.value = 0;
});
