import 'normalize.css';
import '/src/styles/style.css';
import '/src/styles/waiting.css';
import 'animate.css';
import dayjs from 'dayjs';
import { HoraroOrgApiV1EventsSchedules } from '../../../../typings/horaro.org-api-v1-events-schedules';
import { setupSchedule } from './schedule';

nodecg.Replicant('rightPlayerScore').value = 0;
const eventScheduleReplicant = nodecg.Replicant<HoraroOrgApiV1EventsSchedules>('eventSchedules');

eventScheduleReplicant.on('change', (eventSchedules: HoraroOrgApiV1EventsSchedules) => {
  if (!eventSchedules.data) {
    console.error('対象のイベントデータがありません');
    return;
  }
  const newestSchedule = eventSchedules.data[eventSchedules.data.length - 1];
  console.log(newestSchedule.items);

});

setInterval(() => {
  const time = dayjs().format('HH:mm');
  const timeElement = document.querySelector<HTMLParagraphElement>('#current-time');
  if (!timeElement) { throw new Error('selector not found'); }
  timeElement.innerText = time;
}, 10);

setupSchedule();
