import './styles/style.css';
import { HoraroOrgApiV1EventsSchedules } from '../../../typings/horaro.org-api-v1-events-schedules';
import dayjs from 'dayjs';

const loadScheduleListElement = document.querySelector<HTMLButtonElement>('#load-schedule-list');
if (loadScheduleListElement == null) { throw new Error('selector not found'); }
const firstLineElement = document.querySelector<HTMLSelectElement>('#first-line');
if (firstLineElement == null) { throw new Error('selector not found'); }
const secondLineElement = document.querySelector<HTMLSelectElement>('#second-line');
if (secondLineElement == null) { throw new Error('selector not found'); }
const thirdLineElement = document.querySelector<HTMLSelectElement>('#third-line');
if (thirdLineElement == null) { throw new Error('selector not found'); }
const scheduleNextElement = document.querySelector<HTMLSelectElement>('#schedule-next');
if (scheduleNextElement == null) { throw new Error('selector not found'); }
const scheduleBackElement = document.querySelector<HTMLSelectElement>('#schedule-back');
if (scheduleBackElement == null) { throw new Error('selector not found'); }

type Schedule = {
  title: string,
  content: string
}

loadScheduleListElement.addEventListener('click', async () => {
  // ロード時
  // イベントリストを取得
  const eventScheduleReplicant = nodecg.Replicant<HoraroOrgApiV1EventsSchedules>('eventSchedules');
  const eventSchedules = eventScheduleReplicant.value;
  if (eventSchedules == null) {
    throw new Error('スケジュールを取得できませんでした');
  }
  if (!eventSchedules.data) {
    console.error('対象のイベントデータがありません');
    return;
  }

  /// データ挿入
  // 空データを挿入
  firstLineElement.textContent = '';
  secondLineElement.textContent = '';
  thirdLineElement.textContent = '';
  firstLineElement.insertAdjacentElement('beforeend', document.createElement('option'));
  secondLineElement.insertAdjacentElement('beforeend', document.createElement('option'));
  thirdLineElement.insertAdjacentElement('beforeend', document.createElement('option'));

  // 表示用データに加工
  const newestSchedule = eventSchedules.data[eventSchedules.data.length - 1];
  const scheduleTitle = newestSchedule.name;
  nodecg.Replicant<string>('scheduleTitle').value = scheduleTitle;
  const scheduleList = newestSchedule.items.map(item => {
    const schedule: Schedule = {
      title: dayjs(item.scheduled).format('HH:mm:ss') + '～',
      content: item.data[0]
    };
    return schedule;
  });
  const formattedScheduleReplicant = nodecg.Replicant<Schedule[]>('formattedSchedule');
  formattedScheduleReplicant.value = scheduleList;

  scheduleList.forEach(schedule => {
    const optionElement = document.createElement('option');
    optionElement.text = `${schedule.content} (${schedule.title})`;
    optionElement.value = schedule.title;
    firstLineElement.insertAdjacentElement('beforeend', <HTMLOptionElement>optionElement.cloneNode(true));
    secondLineElement.insertAdjacentElement('beforeend', <HTMLOptionElement>optionElement.cloneNode(true));
    thirdLineElement.insertAdjacentElement('beforeend', <HTMLOptionElement>optionElement.cloneNode(true));
  });
});


firstLineElement.addEventListener('change', (event) => {
  const title = (<HTMLSelectElement>event.target).value;
  const formattedScheduleReplicant = nodecg.Replicant<Schedule[]>('formattedSchedule').value;
  if (formattedScheduleReplicant == null) {
    throw new Error('データがロードされていません');
  }
  const firstLineReplicant = nodecg.Replicant<Schedule>('firstLineReplicant');
  firstLineReplicant.value = formattedScheduleReplicant.filter(schedule => schedule.title === title)[0];
});

secondLineElement.addEventListener('change', (event) => {
  const title = (<HTMLSelectElement>event.target).value;
  const formattedScheduleReplicant = nodecg.Replicant<Schedule[]>('formattedSchedule').value;
  if (formattedScheduleReplicant == null) {
    throw new Error('データがロードされていません');
  }
  const secondLineReplicant = nodecg.Replicant<Schedule>('secondLineReplicant');
  secondLineReplicant.value = formattedScheduleReplicant.filter(schedule => schedule.title === title)[0];
});

thirdLineElement.addEventListener('change', (event) => {
  const title = (<HTMLSelectElement>event.target).value;
  const formattedScheduleReplicant = nodecg.Replicant<Schedule[]>('formattedSchedule').value;
  if (formattedScheduleReplicant == null) {
    throw new Error('データがロードされていません');
  }
  const thirdLineReplicant = nodecg.Replicant<Schedule>('thirdLineReplicant');
  thirdLineReplicant.value = formattedScheduleReplicant.filter(schedule => schedule.title === title)[0];
});


scheduleNextElement.addEventListener('click', async () => {
  const event = new Event('change');
  firstLineElement.selectedIndex = firstLineElement.selectedIndex + 1;
  secondLineElement.selectedIndex = secondLineElement.selectedIndex + 1;
  thirdLineElement.selectedIndex = thirdLineElement.selectedIndex + 1;
  firstLineElement.dispatchEvent(event);
  secondLineElement.dispatchEvent(event);
  thirdLineElement.dispatchEvent(event);
});

scheduleBackElement.addEventListener('click', async () => {
  const event = new Event('change');
  firstLineElement.selectedIndex = firstLineElement.selectedIndex + -1;
  secondLineElement.selectedIndex = secondLineElement.selectedIndex + -1;
  thirdLineElement.selectedIndex = thirdLineElement.selectedIndex + -1;
  firstLineElement.dispatchEvent(event);
  secondLineElement.dispatchEvent(event);
  thirdLineElement.dispatchEvent(event);
});
