import {NodeCG} from './definition';

module.exports = (nodecg: NodeCG) => {
  nodecg.Replicant('leftPlayerName').value = 'Noita';
  nodecg.Replicant('rightPlayerName').value = 'Noita';
  nodecg.Replicant('leftPlayerScore').value = 0;
  nodecg.Replicant('rightPlayerScore').value = 0;
};

