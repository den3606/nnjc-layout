import './styles/style.css';
import csvToJson from 'csvtojson';

const leftNameReplicant = nodecg.Replicant<string>('leftPlayerName');
const leftPlayerNameElement = document.querySelector<HTMLSelectElement>('#left-player-name');
if (!leftPlayerNameElement) { throw new Error('selector not found'); }

leftPlayerNameElement.addEventListener('change', (event) => {
  leftNameReplicant.value = (<HTMLSelectElement>event.target).value;
});

leftNameReplicant.on('change', ((newValue: string) => {
  leftPlayerNameElement.value = newValue;
}));

const rightNameReplicant = nodecg.Replicant<string>('rightPlayerName');

const rightPlayerNameElement = document.querySelector<HTMLSelectElement>('#right-player-name');
if (!rightPlayerNameElement) { throw new Error('selector not found'); }
rightPlayerNameElement.addEventListener('change', (event) => {
  rightNameReplicant.value = (<HTMLSelectElement>event.target).value;
});

rightNameReplicant.on('change', ((newValue: string) => {
  rightPlayerNameElement.value = newValue;
}));


type Assets = {
  base: string;
  category: string;
  ext: string;
  name: string;
  namespace: string;
  sum: string;
  url: string;
};

const loadPlayersFromCSVElement = document.querySelector<HTMLButtonElement>('#load-players-from-csv');
if (!loadPlayersFromCSVElement) { throw new Error('selector not found'); }
loadPlayersFromCSVElement.addEventListener('click', async () => {
  const isArray = <T>(maybeArray: T | readonly T[]): maybeArray is T[] => {
    return Array.isArray(maybeArray);
  };

  const assets = nodecg.Replicant<Assets[]>('assets:playerList').value;
  if (!isArray(assets)) {
    alert('csvファイルをアップロードしてください');
    return;
  }
  const csvData = await fetch(assets[0].url).then(data => data.text());
  console.log(csvData);

  const jsonArray = await csvToJson({ noheader: true }).fromString(csvData);
  const playerNames = jsonArray.filter(json => json.field11 === '参加枠').map(json => json.field3);
  const optionElements = playerNames.map(playerName => {
    const optionElement = document.createElement('option');
    optionElement.text = playerName;
    optionElement.value = playerName;
    return optionElement;
  });

  const leftPlayerNameElement = document.querySelector<HTMLSelectElement>('#left-player-name');
  if (!leftPlayerNameElement) { throw new Error('selector not found'); }
  const rightPlayerNameElement = document.querySelector<HTMLSelectElement>('#right-player-name');
  if (!rightPlayerNameElement) { throw new Error('selector not found'); }


  leftPlayerNameElement.textContent = '';
  rightPlayerNameElement.textContent = '';
  leftPlayerNameElement.insertAdjacentElement('beforeend', document.createElement('option'));
  rightPlayerNameElement.insertAdjacentElement('beforeend', document.createElement('option'));
  optionElements.forEach(element => {
    leftPlayerNameElement.insertAdjacentElement('beforeend', element);
    const clone = <HTMLOptionElement>element.cloneNode(true);
    rightPlayerNameElement.insertAdjacentElement('beforeend', clone);
  });
});
