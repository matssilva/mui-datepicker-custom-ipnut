import React, { useState } from 'react';
import {
  KeyboardDateTimePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import calendarSVG from './images/calendar.svg';

const Datepicker = props => {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDateTimePicker
        ampm={false}
        label="With keyboard"
        value={selectedDate}
        onChange={handleDateChange}
        disablePast
        minDateMessage={'Não selecione o passado'}
        format="dd/MM/yyyy HH:mm"
        keyboardIcon={<img src={calendarSVG} alt="Calendar" />}
        InputAdornmentProps={{
          position: 'start'
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

export default Datepicker;
