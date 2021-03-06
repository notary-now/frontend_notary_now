import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  let header;

  beforeEach(() => {
    header = shallow(<Header />);
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(header).toMatchSnapshot();
  });
});
