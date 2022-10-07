import { render } from '@testing-library/react';

import CourtsideFeatureHome from './courtside-feature-home';

describe('CourtsideFeatureHome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CourtsideFeatureHome />);
    expect(baseElement).toBeTruthy();
  });
});
