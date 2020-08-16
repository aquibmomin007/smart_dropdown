import React from 'react';
import SearchBlock, {SearchBlockProps} from '../components/SearchBlock/SearchBlock';
import { render } from '@testing-library/react';


describe('SearchBlock Testing', () => {
  test('renders correctly and Add Button is shown', () => {
    const searchBlockProps:SearchBlockProps = {
      searchTerm: '',
      hasAddPermission: true,
      handleAddNewOption: jest.fn(),
      handleSearchChange: jest.fn(),
      showSearchAddBlock: jest.fn().mockReturnValue(true),
    };

    const { container, getByTestId, debug } = render(
        <SearchBlock {...searchBlockProps} />
    )
    const searchAddBtnHtml = getByTestId('add-block-test').querySelector(
      'button'
    ) as HTMLInputElement;
    expect(container).toMatchSnapshot();
    expect(searchAddBtnHtml).not.toBeNull()
  });

  test('renders correctly and Add Button is not shown', () => {
    const searchBlockProps:SearchBlockProps = {
      searchTerm: '',
      hasAddPermission: false,
      handleAddNewOption: jest.fn(),
      handleSearchChange: jest.fn(),
      showSearchAddBlock: jest.fn().mockReturnValue(true),
    };

    const { container, getByTestId, debug } = render(
        <SearchBlock {...searchBlockProps} />
    )
    const searchAddBtnHtml = getByTestId('add-block-test').querySelector(
      'button'
    ) as HTMLInputElement;
    expect(container).toMatchSnapshot();
    expect(searchAddBtnHtml).toBeNull()
  });
});
