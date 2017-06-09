var React = require('react');


var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired
  },
  render: function(){
    var {countdownStatus} = this.props;

    var renderStartStopButton = () => {
      if(countdownStatus === 'started'){
        return <button className="button secondary">Pause</button>
      }else{
        return <button className="button primary">Start</button>
      }
    };

    return (
      <div className="controls">
        <button className="button alert hollow">Clear</button>
        {renderStartStopButton()}
      </div>
    )
  }
});


module.exports = Controls;
