import './styles/style.css';

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



// jsonファイル一覧取得のソース
// const players = await async function () {
//   const e = await fetch("./playerList.json");
//   return (await e.json()).players
// }();
// nameReplicant.value = players[0]

// csvファイルの内容を読み込み
// csvファイルをパース
// const records = parse(data, { columns: true });
// 結果の表示
// for (const record of records) {
//   console.log(record);
// }
