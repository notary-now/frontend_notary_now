import React from 'react';
import { shallow } from 'enzyme';
import Find from './Find';

describe('Find', () => {
  let find;

  beforeEach(() => {
    find = shallow(<Find />);
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(find).toMatchSnapshot();
  });
});
