import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let app;

  beforeEach(() => {
    app = shallow(<App />);
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(app).toMatchSnapshot();
  });
});
