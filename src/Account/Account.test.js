import React from 'react';
import { shallow } from 'enzyme';
import Account from './Account';

describe('Account', () => {
  let account;

  beforeEach(() => {
    account = shallow(<Account />);
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(account).toMatchSnapshot();
  });
});
