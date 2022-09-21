export function setupPlayerName() {
  const leftPlayerName = document.querySelector<HTMLSelectElement>('#left-player-name');
  if (!leftPlayerName) { throw new Error('selector not found'); }
  const rightPlayerName = document.querySelector<HTMLSelectElement>('#right-player-name');
  if (!rightPlayerName) { throw new Error('selector not found'); }
  const leftPlayerNameReplicant = nodecg.Replicant<string>('leftPlayerName');
  const rightPlayerNameReplicant = nodecg.Replicant<string>('rightPlayerName');

  leftPlayerNameReplicant.on('change', (newValue: string) => {
    leftPlayerName.innerText = newValue;
  });

  rightPlayerNameReplicant.on('change', (newValue: string) => {
    rightPlayerName.innerText = newValue;
  });
}
