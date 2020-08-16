import React from 'react';
import ListItem, {ListItemProps} from '../components/ListItem/ListItem';
import { render } from '@testing-library/react';


describe('ListItem Testing', () => {
  test('renders correctly for nothing is selected', () => {
    const listItemProps:ListItemProps = {
      selectedOption: null,
      country: {
        label: "Singapore",
        value: 'SG'
      },
      handleSelectChange: jest.fn()
    };

    const { container, getByTestId } = render(
        <ListItem {...listItemProps} />
    )
    const listItemHtml = getByTestId('list-item-test');
    expect(container).toMatchSnapshot();
    expect(listItemHtml.classList.contains('activeListItem')).not.toBe(true)
  });

  test('renders correctly for Item is selected', () => {
    const selectedItem = {
      label: "Singapore",
      value: 'SG'
    };
    const listItemProps:ListItemProps = {
      selectedOption: selectedItem,
      country: selectedItem,
      handleSelectChange: jest.fn()
    };

    const { container, getByTestId } = render(
        <ListItem {...listItemProps} />
    )

    const listItemHtml = getByTestId('list-item-test');
    expect(container).toMatchSnapshot();
    expect(listItemHtml.classList.contains('activeListItem')).toBe(true)

  });
});
