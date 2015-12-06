export default function calculate(left, width, step) {
  if (left === 0 && width < 100) {
    width += step;
    if (width > 100) width = 100;
  } else if (width <= 100 && left < 100) {
    left += step;
    width -= step;
  } else if (left >= 100 && width <= 0) {
    left = 0;
  }

  return { width, left };
};
