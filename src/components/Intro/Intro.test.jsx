import { screen, waitFor } from '@testing-library/react';
import Intro from './Intro';
import rendersWithTheme from '../../__tests__/testsUtils/rendersWithTheme'

describe('Intro component', () => {
    rendersWithTheme(
        <Intro />
    );

    test('Intro renders correctly', () => {
        expect(screen.getByRole('heading', { name: /seb\.dev/i })).toBeInTheDocument();
    });

    test('calls onComplete after animation ends', async () => {
    const onCompleteMock = vi.fn();

    rendersWithTheme(<Intro onComplete={onCompleteMock} />);

    await waitFor(() => {
      expect(onCompleteMock).toHaveBeenCalled();
    }, { timeout: 2300 });
  });
});