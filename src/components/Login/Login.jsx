import React from 'react'
import { Avatar, Grid, Paper, TextField, Button, Typography, Checkbox, Link } from '@mui/material'
import { LockOutlined } from '@mui/icons-material'

export default function Login() {

  const paperStyle = {
    width:"300px",
    height:"450px"
  }

  const inputFieldStyle = {
    marginBottom:"8px"
  }

  const avatarStyle = {
    backgroundColor:"#006780"
  }

  const linkStyle = {
    textDecoration:"none"
  }

  return (
    <React.Fragment>
      <Grid align='center' marginY={20}>
        <Paper elevation={10} style={paperStyle}>
          <Grid marginBottom={2} align='center' paddingTop={1}>
            <h1>Sign In</h1>
            <Avatar style={avatarStyle}><LockOutlined/></Avatar>
          </Grid>
          <Grid align='center'  paddingX={3}>
            <TextField label='Username' placeholder='Enter username' fullWidth style={inputFieldStyle} />
            <TextField label='Password' type={'password'} placeholder='Enter password' fullWidth style={inputFieldStyle} />
          </Grid>
          <Grid align='left' paddingLeft={1.5}>
          <Checkbox align='left'/>Remember Me
          </Grid>
          <Grid paddingX={3} marginBottom={2}>
          <Button type='submit' variant='contained' style={avatarStyle} fullWidth >Login</Button>
          </Grid>
          <Grid>
            <Typography>
              <Link href='#' style={linkStyle}>Forgot Password</Link>
            </Typography>
            <Typography>
               Dont have account? 
              <Link href='/signup' style={linkStyle}> Signup</Link>
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </React.Fragment>
  )
}
