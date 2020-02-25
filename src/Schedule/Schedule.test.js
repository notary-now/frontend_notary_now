import React from 'react';
import { shallow } from 'enzyme';
import Schedule from './Schedule';

describe('Schedule', () => {
  let schedule;

  beforeEach(() => {
    schedule = shallow(<Schedule />);
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(schedule).toMatchSnapshot();
  });
});
