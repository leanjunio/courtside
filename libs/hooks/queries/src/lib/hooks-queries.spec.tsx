import { render } from '@testing-library/react';

import HooksQueries from './hooks-queries';

describe('HooksQueries', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HooksQueries />);
    expect(baseElement).toBeTruthy();
  });
});
