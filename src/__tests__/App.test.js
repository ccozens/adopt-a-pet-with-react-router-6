import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
// import modules to test
import App from '../App';
import Hero from '../components/hero/index';

afterEach(cleanup);

test('App should look like the snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment(<App />)).toMatchSnapshot();
});

test('hero should render', () => {
  const { getByText } = render(<Hero />);
  expect(getByText('Find your perfect pet'));
});

test('search on home page works', () => {
  render(<App />);
  // assign search bar button
  const button = screen.getByRole('button', { name: '🔎' });
  // assign search box
  const searchBox = screen.getByRole('textbox', { name: 'search-box' });
  // type in search box
  userEvent.type(searchBox, 'dogs');
  // click button to submit search
  userEvent.click(button);
  // verify search box is there
  expect(screen.getByLabelText('search-box')).toBeInTheDocument();
  // verify search worked submission worked and new page has loaded
  screen.getByText('Results for dogs');
});
