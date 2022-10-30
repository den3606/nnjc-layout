import { NodeCG } from './definition';
import https from 'https';
import { HoraroOrgApiV1EventsSchedules } from '../../../typings/horaro.org-api-v1-events-schedules';

module.exports = async (nodecg: NodeCG) => {
  nodecg.Replicant('leftPlayerName').value = 'Noita';
  nodecg.Replicant('rightPlayerName').value = 'Noita';
  nodecg.Replicant('leftPlayerScore').value = 0;
  nodecg.Replicant('rightPlayerScore').value = 0;

  const HORARO_URL = 'https://horaro.org/-/api/v1/events/3650trf20vb98fb4a9/schedules';

  const response: HoraroOrgApiV1EventsSchedules = await new Promise((resolve, reject) => {
    https.get(HORARO_URL, (res) => {
      let rawData = '';
      res.setEncoding('utf8');

      res.on('data', (chunk) => {
        rawData += chunk;
      });
      res.on('end', () => {
        const json: HoraroOrgApiV1EventsSchedules = JSON.parse(rawData);
        resolve(json);
      });
    }).on('error', (e) => {
      console.error(e.message); //エラー時
      reject();
    });
  });
  console.log('loaded extensions');
  nodecg.Replicant('eventSchedules').value = response;
};
