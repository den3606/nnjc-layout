// import { parse } from 'csv-parse';
"use strict";

const leftNameReplicant = nodecg.Replicant("leftPlayerName");

const leftPlayerNameElement = document.querySelector("#left-player-name");
leftPlayerNameElement.addEventListener('change', (e) => {
  leftNameReplicant.value = e.target.value;
});

leftNameReplicant.on("change", ((newValue, oldValue) => { leftPlayerNameElement.value = newValue }));


const rightNameReplicant = nodecg.Replicant("rightPlayerName");

const rightPlayerNameElement = document.querySelector("#right-player-name");
rightPlayerNameElement.addEventListener('change', (e) => {
  rightNameReplicant.value = e.target.value;
});

rightNameReplicant.on("change", ((newValue, oldValue) => { rightPlayerNameElement.value = newValue }));



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
