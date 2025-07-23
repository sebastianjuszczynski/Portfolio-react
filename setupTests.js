import '@testing-library/jest-dom';
import 'jest-styled-components';

beforeAll(() => {
  global.IntersectionObserver = class IntersectionObserver {
    constructor(callback) {}
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});