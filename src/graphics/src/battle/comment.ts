export function setupPlayerComment() {
  const PREFIX = 'ひとこと：';

  const leftPlayerComment = document.querySelector<HTMLSelectElement>('#left-player-comment');
  if (!leftPlayerComment) { throw new Error('selector not found'); }
  const rightPlayerComment = document.querySelector<HTMLSelectElement>('#right-player-comment');
  if (!rightPlayerComment) { throw new Error('selector not found'); }
  const leftPlayerCommentReplicant = nodecg.Replicant<string>('leftPlayerComment');
  const rightPlayerCommentReplicant = nodecg.Replicant<string>('rightPlayerComment');

  leftPlayerCommentReplicant.on('change', (newValue: string) => {
    leftPlayerComment.innerText = PREFIX + newValue;
  });

  rightPlayerCommentReplicant.on('change', (newValue: string) => {
    rightPlayerComment.innerText = PREFIX + newValue;
  });
}
