import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';

it('renders correctly', () => {
  const wrapper = shallow(
    <App/>
  );
  expect(wrapper.debug()).toMatchSnapshot();
});

it('mount correctly', () => {
  const wrapper = shallow(
    <App />
  );
  expect(() => wrapper).not.toThrow();
});
