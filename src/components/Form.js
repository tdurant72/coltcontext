import React, { Component } from 'react'
import { Avatar, Button, FormControl, FormControlLabel, Checkbox, Input, InputLabel, Paper, Typography, MenuItem, Select } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from './styles/FormStyles'

class Form extends Component {
    state = {}
    render() {
        const { classes } = this.props;
        return (
            <main className={classes.main}>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant='h5'>Sign in</Typography>
                    <Select>
                        <MenuItem value="English">English</MenuItem>
                        <MenuItem value="French">French</MenuItem>
                        <MenuItem value="Spanish">Spanish</MenuItem>
                    </Select>
                    <form className={classes.form}>
                        <FormControl margin='normal' required fullWidth>
                            <InputLabel htmlFor='email'>Email</InputLabel>
                            <Input id='email' name='email' autoFocus />
                        </FormControl>
                        <FormControl margin='normal' required fullWidth>
                            <InputLabel htmlFor='password'>Password</InputLabel>
                            <Input id='password' name='password' autoFocus />
                        </FormControl>
                        <FormControlLabel
                            control={<Checkbox color='primary' />}
                            label="remember"
                        />
                        <Button
                            variant='contained'
                            type='submit'
                            fullWidth
                            color='primary'
                            className={classes.submit}
                        >
                            signIn
                        </Button>
                    </form>
                </Paper>
            </main>
        );
    }
}

export default withStyles(styles)(Form);