import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';

function add(a, b) {
  return a + b;
}

test('This is example test', () => {
  const sum = add(2,2);
  expect(sum).toBe(4);
});
