import orderByProps from '../firstTask';

test('Сортировка массива', () => {
  const received = orderByProps({
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  }, ['name', 'level']);
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(received).toEqual(expected);
});

test('Сортировка массива при обратном порядкуе в массиве', () => {
  const received = orderByProps({
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  }, ['level', 'name']);
  const expected = [
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];

  expect(received).toEqual(expected);
});
