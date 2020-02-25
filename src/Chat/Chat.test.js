import React from 'react';
import { shallow } from 'enzyme';
import Chat from './Chat';

describe('Chat', () => {
  let chat;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState')
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
    chat = shallow(<Chat />);
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(chat).toMatchSnapshot();
  });

  it('event listeners should be called for onChange', () => {

    const event = {
    preventDefault() {},
    target: { value: 'the-value' }
  };
    chat.find('input').props().onChange(event);


    
  })
});
