import React from 'react';
import Rnd from 'react-rnd';
import moment from 'moment';
import './Timeline.css';


class Timeline extends React.Component {
  constructor(props) {
    super(props);
  }

  update() {
    this.rnd.updateSize({ width: 200, height: 300 });
  }

  render() {
    console.log(this.props.room.name, ': ',this.props.room.avail)
    let bgColor = 'lightGrey'
    let lineColor = 'white'
    let lineWidth = 0;
    let result = [];
      const times = this.props.room.avail.map((time, i) => {
        var splitTimes = time.split(/[\{:},\s]+/)
        splitTimes.splice(2, 1)
        return splitTimes.map((value, i) => {
          if (i === 0 || i === 2) {
            return (Number(value) - 7) * 4;
          }
            return (Number(value) / 15);
        })
      })
        times.forEach(val => {
          result.push([val[0]+val[1], val[2]+val[3]])
        })
      console.log("result: ", result)
      const divs = {};
      divs.slots = [];
      divs.labels = [];
      for (var i = 1; i < 49; i++) {
        i % 4 === 0 ? lineWidth = 3 : lineWidth = 1;
          for (var k = 0; k < result.length; k++) {
            if (i > result[k][0] && i <= result[k][1]) {
              bgColor = '#9ABD36'
            } else if (i >= result[k][0] && i >= result[k][1]){
              bgColor = 'lightGrey';
            }
          }
        divs.slots.push(<div className="time-slot"
          style={{borderRightWidth:lineWidth, backgroundColor: bgColor}} id={i+1} key={i}></div>);
      }
      for (var j = 7; j < 20; j++) {
        divs.labels.push(<div className="time-hour" key={`${j}:00`}>{`${j}:00`}</div>);
      }

    return (
      <div className="timeline-container">
        <div className="timeline">
          <div className="time-labels">{divs.labels}</div>
          <div className="time-bar">{divs.slots}</div>
        </div>
        {/*<Rnd
          default={{
            x: 0,
            y: 0,
            width: 50,
            height: 20,
          }}
          resizeGrid={[50, 50]}
          dragGrid={[50, 50]}
          dragAxis="x"
          enableResizing={{
            bottom: false,
            bottomLeft: false,
            bottomRight: false,
            left: true,
            right: true,
            top: false,
            topLeft: false,
            topRight: false,
          }}
        >
          <div className="box"></div> 
        </Rnd>*/}
      </div>
    );
  }
}

export default Timeline;
