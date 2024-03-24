

export const formatSeenString = (seenList: string[]): string => {
  let seenString = '';
  seenList.map((item, index) => {
    if (index + 1 === seenList.length) {
      seenString = seenString + item;
    } else {
      seenString = seenString + `${item}, `;
    }
  });

  return seenString;
};