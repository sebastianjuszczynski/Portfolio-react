import { renderHook, act } from '@testing-library/react';
import useIsMobile from './useInMobile';

describe('useIsMobile', () => {
  test('returns true if width is less than breakpoint', () => {
    global.innerWidth = 500;
    const { result } = renderHook(() => useIsMobile(768));
    expect(result.current).toBe(true);
  });
  test('returns false if width is greater than breakpoint', () => {
    global.innerWidth = 1024;
    const { result } = renderHook(() => useIsMobile(768));
    expect(result.current).toBe(false);
  });
  test('responds to window resize', () => {
    global.innerWidth = 1024;
    const { result } = renderHook(() => useIsMobile(768));
    expect(result.current).toBe(false);

    act(() => {
      global.innerWidth = 500;
      window.dispatchEvent(new Event('resize'));
    });
    expect(result.current).toBe(true);
  });
});
