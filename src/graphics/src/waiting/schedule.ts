export function setupSchedule() {
  type Schedule = {
    title: string,
    content: string
  }

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


  const firstLineReplicant = nodecg.Replicant<Schedule>('firstLineReplicant');
  const secondLineReplicant = nodecg.Replicant<Schedule>('secondLineReplicant');
  const thirdLineReplicant = nodecg.Replicant<Schedule>('thirdLineReplicant');

  firstLineReplicant.on('change', (schedule: Schedule) => {
    console.log(firstScheduleTitleElement);
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
