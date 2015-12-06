export default function calculate(width, left, step) {
  let newWidth = width > 100 ? 100 : width;
  newWidth = newWidth < 0 ? 0 : newWidth;

  let newLeft = left > 100 ? 100 : left;
  newLeft = newLeft < 0 ? 0 : newLeft;

  const newStep = step <= 0 ? 1 : step;

  if (newLeft === 0 && newWidth < 100) {
    newWidth += newStep;
    if (newWidth > 100) newWidth = 100;
  } else if (newWidth <= 100 && newLeft < 100) {
    newLeft += newStep;
    newWidth -= newStep;
    if (newWidth < 0) newWidth = 0;
  } else if (newLeft >= 100 && newWidth <= 0) {
    newLeft = 0;
  } else {
    newLeft = 0;
    newWidth = 0;
  }

  return { width: newWidth, left: newLeft };
}
