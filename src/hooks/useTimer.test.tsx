import {it, describe, vi, beforeEach, afterEach} from 'vitest';
import {renderHook} from '@testing-library/react-native';
import useTimer from './useTimer';

describe('useTimer', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.clearAllTimers();
    vi.clearAllMocks();
    vi.useRealTimers();
  });
  it('should initialize correctly', async () => {
    // Arrange: Setup your test
    const duration = 1000;

    // Act: Call the method you want to test
    const {result} = renderHook(() => useTimer(duration));

    // Assert: Check if the results are as expected
    // Adjust these assertions based on what you expect useTimer to do
    // expect(result.current).toBeDefined();
  });
  // it('should start the timer', () => {});
});

// describe('useTimer', () => {
//   beforeEach(() => {
//     jest.useFakeTimers();
//   });

//   afterEach(() => {
//     jest.clearAllTimers();
//     jest.clearAllMocks();
//     jest.useRealTimers();
//   });

//   test('should initialize correctly', async () => {
//     const {result} = renderHook(() => useTimer(60));
//     expect(result.current.time).toBe('00:01:00');
//   });

//   test('should start the timer', () => {
//     const {result} = renderHook(() => useTimer(60));

//     act(() => {
//       result.current.start();
//     });
//     act(() => {
//       jest.advanceTimersByTime(1000); // 1초 경과
//     });

//     expect(result.current.time).toBe('00:00:59');
//   });

//   test('should restart the timer', () => {
//     const {result} = renderHook(() => useTimer(60));

//     act(() => {
//       result.current.restart();
//       jest.advanceTimersByTime(1000); // 1초 경과
//     });

//     expect(result.current.time).toBe('00:00:59');
//   });
// });
