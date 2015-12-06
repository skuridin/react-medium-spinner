export default function calculate(left, width, step) {
  let newLeft = left;
  let newWidth = width;
  if (newLeft === 0 && newWidth < 100) {
    newWidth += step;
    if (newWidth > 100) newWidth = 100;
  } else if (newWidth <= 100 && newLeft < 100) {
    newLeft += step;
    newWidth -= step;
  } else if (newLeft >= 100 && newWidth <= 0) {
    newLeft = 0;
  }

  return { newWidth, newLeft };
}
