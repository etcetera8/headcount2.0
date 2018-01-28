import React from 'react';
import ComparisonCard from './ComparisonCard';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

it('should render', () => {
  const mockData = {COLORADO: 0.53, 'ACADEMY 20': 0.407, compared: 1.302}
  const wrapper = shallow(<ComparisonCard comparedObject={mockData} />)

  expect(wrapper.find('article.compare-card').exists()).toEqual(true);
})

it('should match the snapshot', () => {
  const mockData = {COLORADO: 0.53, 'ACADEMY 20': 0.407, compared: 1.302}
  const wrapper = shallow(<ComparisonCard comparedObject={mockData} />)

  expect(wrapper).toMatchSnapshot();
})