import * as React from 'react';
import MoreLink, {MoreLinkProps} from '../components/MoreLink/MoreLink';
import { render } from '@testing-library/react';


describe('MoreLink Testing', () => {
  test('renders correctly', () => {
    const moreLinkProps:MoreLinkProps = {
        moreValue: 5,
        handleSetAllCountries: jest.fn()
      };

    const { container, getByTestId } = render(
        <MoreLink {...moreLinkProps} />
    )
    expect(container.firstChild).toMatchSnapshot();
  });
});
