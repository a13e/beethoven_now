var Timer = React.createClass({
  render: function() {
    return (
      <h1 className="timer">{this.props.date}</h1>
    );
  }
});

var updateConditions = function() {
  var recordedSecond = null

  var index = 0
  var animationPositions = [true, false, false, false]
  // var topToBottom = true
  // var rightToLeft = false
  // var bottomToTop = false
  // var leftToRight = false



  setInterval(function() {
    var dateFormat = new DateFormat("HH mm ss");
    var now = dateFormat.format(new Date());

    ReactDOM.render(
       <Timer date={now} />,
       document.getElementById('container-fluid')
    );

    var secondFormat = new DateFormat("ss");
    var secondNow = dateFormat.format(new Date())

    if(secondNow !== recordedSecond){
      ReactDOM.render(
        <BackGround topToBottom={animationPositions[0]} rightToLeft={animationPositions[1]} bottomToTop={animationPositions[2]} leftToRight={animationPositions[3]} />,
        document.getElementById('bg')
      );
      animationPositions[index] = false

      if(index > 2) {
        index = 0;
      } else {
        index += 1;
      }

      animationPositions[index] = true
      recordedSecond = secondNow
      console.log(animationPositions)
    }

  }, 500);
}

updateConditions();

var BackGround = React.createClass({

  render: function(){
    var bgClasses = classNames({
      'background': true,
      'top-to-bottom': this.props.topToBottom,
      'right-to-left': this.props.rightToLeft,
      'bottom-to-top': this.props.bottomToTop,
      'left-to-right': this.props.leftToRight,
    });
    return (
      <div className={bgClasses}></div>
    );
  }
});

var changeBg = function(){
  var condition = false
  setInterval(function() {
  }, 1000)
}

changeBg();

var AudioPlayer = React.createClass({
    render: function() {
        console.info('[AudioPlayer] render...');
        return (
            <audio ref="audio_tag" src={this.props.src} autoPlay={this.props.autoPlay}></audio>
        );
    }
});

ReactDOM.render(
  <AudioPlayer src="https://dl.dropboxusercontent.com/u/73228358/beethoven/Symphony9.mp3" autoPlay="true" />,
  document.getElementById('audioWrapper')
);