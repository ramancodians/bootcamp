export const getUnitCount = (toothObj: any) => {
  if (!toothObj) {
    return 0;
  }

  let count = 0;
  Object.values(toothObj).forEach((section) => {
    if (section) {
      section.forEach((teeth) => {
        if (teeth.isSelected) {
          count++;
        }
      });
    }
  });
  return count;
};
