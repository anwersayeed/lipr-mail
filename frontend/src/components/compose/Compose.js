import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DateTimePicker from 'react-datetime-picker';
// import Frequency from './Frequency';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import axios from 'axios';

const useStyles = makeStyles(() => ({
  container: {
    marginLeft: '260px',
    marginTop: '80px',
  },
  image: {
    width: '60%',
    padding: '10px',
  },
  size: {
    height: '50px',
    width: '80px',
  },
}));

const Compose = () => {
  const classes = useStyles();
  const [selectedDate, onDateChange] = useState(new Date());
  const initialValue = {
    to: '',
    cc: '',
    subject: '',
    body: '',
    scheduleDate: selectedDate,
    frequency: 30,
  };
  const [mail, setMail] = useState(initialValue);

  const handleChangeMail = (event) => {
    const { name, value } = event.target;
    setMail({
      ...mail,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      ...mail,
    };

    axios
      .post('http://localhost:8000/', data)
      .then((res) => {
        setMail({
          ...initialValue,
        });
        // this.props.history.push('/');
      })
      .catch((err) => {
        console.log('Error in Compose!');
      });
  };

  return (
    <>
      <div className={classes.container}>
        <Grid container spacing={3} justify="center">
          <Grid item xs={8}>
            <form noValidate onSubmit={onSubmit}>
              <Grid container justify="center">
                <TextField
                  id="To"
                  label="To *"
                  variant="outlined"
                  fullWidth
                  style={{ margin: 8 }}
                  helperText="Enter Email to send"
                  name="to"
                  onChange={handleChangeMail}
                />
                <TextField
                  id="CC"
                  label="CC *"
                  variant="outlined"
                  fullWidth
                  style={{ margin: 8 }}
                  helperText="CC Emails"
                  name="cc"
                  onChange={handleChangeMail}
                />
                <TextField
                  id="Subject"
                  label="Subject *"
                  variant="outlined"
                  fullWidth
                  style={{ margin: 8 }}
                  helperText="Enter the Subject"
                  name="subject"
                  onChange={handleChangeMail}
                />
                <TextField
                  id="Body"
                  label="Mail Body *"
                  variant="outlined"
                  multiline
                  fullWidth
                  rows={5}
                  style={{ margin: 8 }}
                  name="body"
                  onChange={handleChangeMail}
                />
                <Grid container justify="space-between">
                  <Grid container>
                    <Grid item>
                      <DateTimePicker
                        onChange={onDateChange}
                        value={selectedDate}
                      />
                    </Grid>
                    <Grid item>
                      <InputLabel htmlFor="age-native-simple">
                        frequency
                      </InputLabel>
                      <Select
                        native
                        value={mail.frequency}
                        onChange={handleChangeMail}
                        inputProps={{
                          name: 'frequency',
                          id: 'age-native-simple',
                        }}
                      >
                        <option value={30}>Thirty Seconds</option>
                        <option value="month">Monthly</option>
                        <option value="year">Yearly</option>
                      </Select>
                    </Grid>
                  </Grid>
                  <Button
                    // type="submit"
                    variant="contained"
                    color="secondary"
                    style={{ margin: 8 }}
                    onClick={() => console.log(mail)}
                  >
                    Set/Send
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Compose;
