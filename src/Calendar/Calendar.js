import React from 'react';
import DayPicker from "react-day-picker";
import './Calendar.css';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.handleDayClick = this.handleDayClick.bind(this);
  }
  
  handleDayClick = (day, { disabled, selected }) => {
    const unixTime = day.valueOf() / 1000;
    // this.setState({ 
    //   selectedDay: unixTime
    // })
    this.props.fetchRooms(unixTime)
  }

  render() {  
    return (
      <DayPicker
        selectedDays={ new Date() }
        onDayClick={ this.handleDayClick }
        firstDayOfWeek={1}
      />
    );
  }
}

export default Calendar;