import test from 'tape';
import calculate from '../calculate';

test('Calculates position', t => {
  let result = {};

  result = calculate(0, 0, 10);
  t.equal(result.width, 10);
  t.equal(result.left, 0);

  result = calculate(90, 0, 10);
  t.equal(result.width, 100);
  t.equal(result.left, 0);

  result = calculate(95, 0, 10);
  t.equal(result.width, 100);
  t.equal(result.left, 0);

  result = calculate(100, 0, 10);
  t.equal(result.width, 90);
  t.equal(result.left, 10);

  result = calculate(50, 50, 10);
  t.equal(result.width, 40);
  t.equal(result.left, 60);

  result = calculate(120, 120, 10);
  t.equal(result.width, 0);
  t.equal(result.left, 0);

  result = calculate(0, 0, 101);
  t.equal(result.width, 100);
  t.equal(result.left, 0);

  result = calculate(0, 0, 0);
  t.equal(result.width, 1);
  t.equal(result.left, 0);

  result = calculate(0, 0, -29);
  t.equal(result.width, 1);
  t.equal(result.left, 0);

  result = calculate(-10, -10, -29);
  t.equal(result.width, 1);
  t.equal(result.left, 0);

  t.end();
});
