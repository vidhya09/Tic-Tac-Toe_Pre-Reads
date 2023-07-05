import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { calculateWinner } from './App';

describe('calculateWinner', () => {
  it('should return the correct winner for X', () => {
    const squares = ['X', 'X', 'X', null, null, null, null, null, null];
    const winner = calculateWinner(squares);
    expect(winner).toBe('X');
  });

  it('should return the correct winner for O', () => {
    const squares = ['O', 'O', 'O', null, null, null, null, null, null];
    const winner = calculateWinner(squares);
    expect(winner).toBe('O');
  });

  it('should return null when there is no winner', () => {
    const squares = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O'];
    const winner = calculateWinner(squares);
    expect(winner).toBe(null);
  });
});
