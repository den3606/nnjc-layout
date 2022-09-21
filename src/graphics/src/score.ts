export function setupScore() {
  const leftPlayerScore = document.querySelector<HTMLSpanElement>('#left-player-score');
  if (!leftPlayerScore) { throw new Error('selector not found'); }
  const rightPlayerScore = document.querySelector<HTMLSpanElement>('#right-player-score');
  if (!rightPlayerScore) { throw new Error('selector not found'); }
  const leftPlayerScoreReplicant = nodecg.Replicant<string>('leftPlayerScore');
  const rightPlayerScoreReplicant = nodecg.Replicant<string>('rightPlayerScore');

  leftPlayerScoreReplicant.on('change', (newValue: string) => {
    leftPlayerScore.innerText = newValue;
  });

  rightPlayerScoreReplicant.on('change', (newValue: string) => {
    rightPlayerScore.innerText = newValue;
  });

}

