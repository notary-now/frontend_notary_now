import {getAccount, getAppointments, getNotaries, postBooking} from './fetchCalls.js'


beforeEach(() => {
   window.fetch = jest.fn().mockImplementation(() => {
     return Promise.resolve({
       ok: true,
       json: () => Promise.resolve({test:'test'})
     });
   });
 });

describe('getAccount', () => {

  it('should get accounts', () => {
    let setAccount = jest.fn()
    getAccount(setAccount)
    expect(window.fetch).toHaveBeenCalled()
  })

})


describe('getAppointments', () => {

  it('should get Appointments', () => {
    let setSchedule = jest.fn()
    getAppointments(setSchedule)
    expect(window.fetch).toHaveBeenCalled()
  })

})

describe('getNotaries', () => {

  it('should get notaries', () => {
    let setNotaries = jest.fn()
    let setBooking = jest.fn()
    let showChat = jest.fn()

    getNotaries(setNotaries, setBooking, showChat)
    expect(window.fetch).toHaveBeenCalled()
  })

})

describe('postBooking', () => {

  it('should postBooking', () => {
    let body = {test: 'test'}
    let setBooking = jest.fn()

    postBooking(body, setBooking)
    expect(window.fetch).toHaveBeenCalled()
  })

})
