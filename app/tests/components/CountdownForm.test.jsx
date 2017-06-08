var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var CountdownForm = require('CountdownForm');


describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  it('should call onSetCountdown if valid seconds entered', () => {
    // spy buat nge check yg berhubungan dgn panggil fungsi
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
    var $el = $(ReactDOM.findDOMNode(countdownForm));
    countdownForm.refs.seconds.value = '109';
    // simulasi form submit
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);
  });

  it('should not call onSetCountdown if invalid seconds entered', () => {
    // spy buat nge check yg berhubungan dgn panggil fungsi
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
    var $el = $(ReactDOM.findDOMNode(countdownForm));
    countdownForm.refs.seconds.value = 'asdf';
    // simulasi form submit
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
