export function setupSchedule() {
  type Schedule = {
    title: string,
    content: string
  }

  const scheduleTitleElement = document.querySelector<HTMLHeadingElement>('#schedule-box-title');
  if (!scheduleTitleElement) { throw new Error('selector not found'); }
  const firstScheduleTitleElement = document.querySelector<HTMLSelectElement>('#first-schedule-title');
  if (!firstScheduleTitleElement) { throw new Error('selector not found'); }
  const secondScheduleTitleElement = document.querySelector<HTMLSelectElement>('#second-schedule-title');
  if (!secondScheduleTitleElement) { throw new Error('selector not found'); }
  const thirdScheduleTitleElement = document.querySelector<HTMLSelectElement>('#third-schedule-title');
  if (!thirdScheduleTitleElement) { throw new Error('selector not found'); }
  const firstScheduleContentsElement = document.querySelector<HTMLSelectElement>('#first-schedule-contents');
  if (!firstScheduleContentsElement) { throw new Error('selector not found'); }
  const secondScheduleContentsElement = document.querySelector<HTMLSelectElement>('#second-schedule-contents');
  if (!secondScheduleContentsElement) { throw new Error('selector not found'); }
  const thirdScheduleContentsElement = document.querySelector<HTMLSelectElement>('#third-schedule-contents');
  if (!thirdScheduleContentsElement) { throw new Error('selector not found'); }
  const scheduleBoxTitleElement = document.querySelector<HTMLSelectElement>('#schedule-box-title');
  if (!scheduleBoxTitleElement) { throw new Error('selector not found'); }


  const scheduleTitleReplicant = nodecg.Replicant<string>('scheduleTitle');
  const firstLineReplicant = nodecg.Replicant<Schedule>('firstLineReplicant');
  const secondLineReplicant = nodecg.Replicant<Schedule>('secondLineReplicant');
  const thirdLineReplicant = nodecg.Replicant<Schedule>('thirdLineReplicant');



  // TODO: タイトルもJSONデータを参照するようにする
  scheduleTitleReplicant.on('change', (title: string) => {
    scheduleTitleElement.innerHTML = title || '';
  });
  firstLineReplicant.on('change', (schedule: Schedule) => {
    firstScheduleTitleElement.innerText = schedule?.title || '';
    firstScheduleContentsElement.innerHTML = '';
    const pElement = <HTMLParagraphElement>document.createElement('p');
    pElement.innerText = schedule.content;
    pElement.className = 'medium-font-size';
    firstScheduleContentsElement.insertAdjacentElement('beforeend', pElement);
  });
  secondLineReplicant.on('change', (schedule: Schedule) => {
    secondScheduleTitleElement.innerText = schedule?.title || '';
    secondScheduleContentsElement.innerHTML = '';
    const pElement = <HTMLParagraphElement>document.createElement('p');
    pElement.innerText = schedule.content;
    pElement.className = 'medium-font-size';
    secondScheduleContentsElement.insertAdjacentElement('beforeend', pElement);
  });
  thirdLineReplicant.on('change', (schedule: Schedule) => {
    thirdScheduleTitleElement.innerText = schedule?.title || '';
    thirdScheduleContentsElement.innerHTML = '';
    const pElement = <HTMLParagraphElement>document.createElement('p');
    pElement.innerText = schedule.content;
    pElement.className = 'medium-font-size';
    thirdScheduleContentsElement.insertAdjacentElement('beforeend', pElement);
  });
}
