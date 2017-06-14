const React = require('react');
const Clock = require('Clock');
const CountdownForm = require('CountdownForm');
const Controls = require('Controls');

var Countdown = React.createClass({
  getInitialState: function(){
    return {
      count: 0,
      countdownStatus: 'stopped'
    }
  },
  // lifecycle component
  // ini jalan saat update props dari parent, atau state berubah
  componentDidUpdate: function(prevProps, prevState){
    if(this.state.countdownStatus !== prevState.countdownStatus){
      switch(this.state.countdownStatus){
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  // // lifecycle component
  // // ini jalan sebelum update props dari parent, atau state berubah
  // componentWillUpdate: function(nextProps, nextState){
  //
  // },
  // // lifecycle component
  // // jalan saat this pertama kali di render
  // componentWillMount: function(){
  //   console.log('component will mount');
  // },
  // // lifecycle component, jalan setelah will mount
  // // jalan saat selesai di render, brarti props dan state bisa di akses
  // componentDidMount: function(){
  //   console.log('component did mount');
  // },
  // lifecycle component
  // jalan kalo component ini (this) dihapus
  componentWillUnmount: function(){
    // console.log('component did unmount');
    clearInterval(this.timer);
    this.timer = undefined; // ini biar varnya dibersihin
  },
  startTimer: function(){
    this.timer = setInterval( () => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });

      if(newCount === 0){
        this.setState({countdownStatus: 'stopped'});
      }
    },  1000);


  },
  handleSetCountdown: function(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },
  handleStatusChange: function(newStatus){
    this.setState({countdownStatus: newStatus});
  },
  render: function(){
    var {count, countdownStatus} = this.state;
    var renderControlArea = () =>{
      if(countdownStatus !== 'stopped')
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
      else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown} />
      }
    }

    return (
    <div>
      <h1 className="page-title">Countdown App</h1>
      <Clock totalSeconds={this.state.count}/>
      {renderControlArea()}
    </div>)
  }
});

module.exports = Countdown;
