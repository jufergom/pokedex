import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import PokemonList from './PokemonList';

const styles = theme => ({
    login: {
        width: 'auto',
        display: 'block',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    container: {
        width: '350px',
        height: '120px',
        marginBottom: '30px'
    },
    image: {
        width: '100%',
        height: 'auto'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {userName: 'Ash Ketchum', userEmail: 'ash@pokemon.com', password: 'pokedex'},
                {userName: 'Misty', userEmail: 'misty@pokemon.com', password: 'paleta'}
            ],
            inputEmail: '',
            inputPassword: '',
            isLoggedIn: false
        }
    }

    handleChange = (stateName, event) => {
        this.setState({[stateName]: event.target.value});
    };

    confirmLogin = (event) => {
        if((this.state.inputEmail === this.state.users[0].userEmail 
            && this.state.inputPassword === this.state.users[0].password)
            || (this.state.inputEmail === this.state.users[1].userEmail 
            && this.state.inputPassword === this.stateusers[1].password)) {
            this.setState({isLoggedIn: true});
        }
        else {
            alert('Usuario y/o contraseña incorrecta');
        }
        event.preventDefault();
    };

    render() {
        const { classes } = this.props;
        return(
            <div className={classes.main}>
                {this.state.isLoggedIn ? 
                <PokemonList /> :
                    <div className={classes.login}>
                        <CssBaseline />
                        <Paper className={classes.paper}>
                            <div className={classes.container}>
                                <img 
                                    src={require('./img/pokemon_logo.png')} 
                                    className={classes.image} 
                                    alt="pokemon"
                                />
                            </div>
                            <Typography component="h1" variant="h5">
                                Pokedex
                            </Typography>
                            <form className={classes.form}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="email">User Email</InputLabel>
                                    <Input 
                                        id="email" 
                                        name="email" 
                                        autoComplete="email"
                                        value={this.state.inputEmail} 
                                        onChange={this.handleChange.bind(this, 'inputEmail')}
                                        autoFocus />
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="password">Password</InputLabel>
                                    <Input 
                                        name="password" 
                                        type="password" 
                                        id="password" 
                                        value={this.state.inputPassword} 
                                        onChange={this.handleChange.bind(this, 'inputPassword')}
                                        autoComplete="current-password" />
                                </FormControl>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={this.confirmLogin.bind(this)}
                                >
                                    Iniciar Sesion
                                </Button>
                            </form>
                        </Paper>
                    </div>
                }    
            </div>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
  export default withStyles(styles)(Login);