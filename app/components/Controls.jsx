var React = require('react');


var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },
  onStatusChange: function (newStatus){
    // pake kyk gini soalnya di render gk boleh update state sema sekali,
    //  harus 'pure function'
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },
  // // lyfecycle componentDidUpdate
  // // dijalanin saat propertinya diganti oleh parent component
  // componentWillReceiveProps: function(newProps){
  //   console.log('componentWillReceiveProps', newProps.countdownStatus);
  // },
  render: function(){
    var {countdownStatus} = this.props;

    var renderStartStopButton = () => {
      if(countdownStatus === 'started'){
        // on click nge expect function buat di jalanin, disini kita pake function
        // buat nge return function
        return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
      }else{
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
      }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    )
  }
});


module.exports = Controls;
