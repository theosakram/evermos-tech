import { render } from '@testing-library/react';

import { Loader } from '.';

describe('Loader', () => {
  it('renders successfully', () => {
    const { baseElement } = render(<Loader />);
    expect(baseElement).toBeTruthy();
  });
});
