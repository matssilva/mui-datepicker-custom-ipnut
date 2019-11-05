import React from 'react';
import Datepicker from './Datepicker';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import '../src/custom.css';
import 'circular-std';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['CircularStd'].join(',')
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="my-datepicker">
        <Datepicker />
      </div>
    </ThemeProvider>
  );
};

export default App;
