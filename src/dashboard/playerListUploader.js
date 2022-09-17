// // import { parse } from 'csv-parse';
// "use strict";

// (async () => {
//   const players = await async function () {
//     const e = await fetch("./playerList.json");
//     return (await e.json()).players
//   }();

//   nameReplicant.value = players[0]

//   // csvファイルをパース
//   const records = parse(data, { columns: true });
//   // 結果の表示
//   for (const record of records) {
//     console.log(record);
//   }


//   const nameSelect = document.querySelector("#leftPlayerName");
//   const submitButton = document.querySelector('#submitButton');

//   const nameReplicant = nodecg.Replicant("leftPlayerName");

//   nameReplicant.on("change", ((newValue, oldValue) => { nameInput.value = newValue }));

//   submitButton.onclick = () => { nameReplicant.value = nameInput.value };


// })();
