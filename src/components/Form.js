import React, { Component } from "react";
import {
  Avatar,
  Button,
  FormControl,
  FormControlLabel,
  Checkbox,
  Input,
  InputLabel,
  Paper,
  Typography,
  MenuItem,
  Select
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles/FormStyles";
import { LanguageContext } from "../contexts/LanguageContext";

const words = {
  english: {
    signIn: "Sign In",
    email: "Email",
    password: "Password",
    remember: "Remember Me"
  },
  french: {
    signIn: "Se Connecter",
    email: "Adresse Electronique",
    password: "Mot de Passe",
    remember: "Souviens-toi De Moi"
  },
  spaish: {
    signIn: "Registrarse",
    email: "Correo Electronico",
    password: "Contrasena",
    remember: "Recuerdame"
  }
};
class Form extends Component {
  static contextType = LanguageContext;
  state = {};
  render() {
    const { language, changeLanguage } = this.context;
    const { classes } = this.props;
    const { email, remember, password, signIn } = words[language];
    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">Sign in</Typography>
          <Select value={language} onChange={changeLanguage}>
            <MenuItem value="English">English</MenuItem>
            <MenuItem value="French">French</MenuItem>
            <MenuItem value="Spanish">Spanish</MenuItem>
          </Select>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">{email}</InputLabel>
              <Input id="email" name="email" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">{password}</InputLabel>
              <Input id="password" name="password" autoFocus />
            </FormControl>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label={remember}
            />
            <Button
              variant="contained"
              type="submit"
              fullWidth
              color="primary"
              className={classes.submit}
            >
              {signIn}
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(Form);
