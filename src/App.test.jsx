import { screen } from '@testing-library/react';
import rendersWithTheme from './__tests__/testsUtils/rendersWithTheme'

vi.mock('gsap', () => ({
  gsap: {
    timeline: ({ onComplete }) => ({
      to: vi.fn(function() {
        if (onComplete) onComplete();
        return this;
      }),
    }),
  },
}));

import App from './App';

test('shows main layout after Intro animation completes', () => {
    rendersWithTheme(<App />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
});
