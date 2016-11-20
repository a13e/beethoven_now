var Timer = React.createClass({
  render: function() {
    return (
      <h1 className="timer">{this.props.date}</h1>
    );
  }
});

var updateConditions = function() {
  var recordedSecond = null

  var  movingBgIndex = 0
  var bgMoveConditions = [true, false, false, false]

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
        <BackGrounds top="true" right="true" bottom="true" left="true" activateTop={bgMoveConditions[0]} activateRight={bgMoveConditions[1]} activateBottom={bgMoveConditions[2]} activateLeft={bgMoveConditions[3]} />,
        document.getElementById('bg')
      );
      //bgMoveConditions[movingBgIndex] = false
      var prevIndex = movingBgIndex

      if(movingBgIndex === 0){
        movingBgIndex += 1
      } else if (movingBgIndex%3 === 0){
        movingBgIndex = 0;
      }else{
        movingBgIndex += 1
      }

      var offTarget = null
      switch (movingBgIndex) {
        case 0:
          offTarget = 2;
          bgMoveConditions[offTarget] = false
          bgMoveConditions[3] = false
          break;
        case 1:
          offTarget = 3;
          break;
        case 2:
          offTarget = 0;
          break;
        case 3:
          offTarget = 1;
          break;
      }
      // console.log(offTarget)
      bgMoveConditions[offTarget] = false
      bgMoveConditions[movingBgIndex] = true
      recordedSecond = secondNow
    }
    //console.log(bgMoveConditions)
  }, 500);
}

updateConditions();

var BackGround = React.createClass({
  render: function(){
    var bgClasses = classNames({
      "background": true,
      "top": this.props.top,
      "right": this.props.right,
      "bottom": this.props.bottom,
      "left": this.props.left,
       "on": this.props.on,
    });

    return(
      <div className={bgClasses}></div>
    )
  }
})

var BackGrounds = React.createClass({
  render: function() {
     return (
        <div>
          <BackGround top={this.props.top} on={this.props.activateTop}/>
          <BackGround right={this.props.right} on={this.props.activateRight}/>
          <BackGround bottom={this.props.bottom} on={this.props.activateBottom}/>
          <BackGround left={this.props.left} on={this.props.activateLeft}/>
        </div>
      )
  }
})


ReactDOM.render(
  <BackGrounds top="true" right="true" bottom="true" left="true" /> ,
  document.getElementById('bg')
)

var AudioPlayer = React.createClass({
    render: function() {
        return (
            <audio ref="audio_tag" src={this.props.src} autoPlay={this.props.autoPlay}></audio>
        );
    }
});

ReactDOM.render(
  <AudioPlayer src="assets/audio/Beethoven_Symphony9.mp3" autoPlay="true" />,
  document.getElementById('audioWrapper')
);
