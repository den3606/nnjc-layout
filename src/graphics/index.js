"use strict";

const leftPlayerName = document.querySelector("#left-player-name");
const rightPlayerName = document.querySelector("#right-player-name");
const leftPlayerNameReplicant = nodecg.Replicant('leftPlayerName');
const rightPlayerNameReplicant = nodecg.Replicant('rightPlayerName');

// Change will be called when the Replicant loads too, so we can use it to set the initial value.
leftPlayerNameReplicant.on('change', (newValue, oldValue) => {
	leftPlayerName.innerText = newValue;
});

rightPlayerNameReplicant.on('change', (newValue, oldValue) => {
	rightPlayerName.innerText = newValue;
});
