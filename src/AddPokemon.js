import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ACTIONS from "./modules/action";
import { connect } from "react-redux";
import PokemonList from './PokemonList';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

const mapStateToProps = state => ({
    items: state.items
});

const mapDispatchToProps = dispatch => ({
  createItem: pokemon => dispatch(ACTIONS.createItem(pokemon)),
  //deleteItem: id => dispatch(ACTIONS.deleteItem(id))
});

class AddPokemon extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            image: '',
            type: '',
            height: '',
            weight: '',
            gender: '',
            catchRate: '',
            pokemon: {},
            pokemonAdded: false
        }
    }

    createPokemon = () => {
        this.setState({pokemon: {image: this.state.image, name: this.state.name, type: this.state.type,
        catchRate: this.state.catchRate}});
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
        this.createPokemon();
    };

    handleSubmit = event => {
        //console.log(this.state.item);
        this.createPokemon();
        this.createPokemon();
        console.log(this.state.pokemon);
        if (this.state.name !== "") {
          // add the item to the store
          console.log(this.state.pokemon);
          this.props.createItem(this.state.pokemon);
          this.setState({pokemonAdded: true});
        }
        event.preventDefault();
    };


    render() {
        const { classes } = this.props;
        return(
            <div> 
                {this.state.pokemonAdded ?
                    <PokemonList /> :
                    <form className={classes.container}>
                        <Paper>
                            <TextField
                                id="standard-name"
                                label="Pokemon name"
                                className={classes.textField}
                                value={this.state.name}
                                onChange={this.handleChange('name')}
                                margin="normal"
                            />
                            <TextField
                                id="standard-name"
                                label="Pokemon image"
                                className={classes.textField}
                                value={this.state.image}
                                onChange={this.handleChange('image')}
                                margin="normal"
                            />
                            <TextField
                                id="standard-name"
                                label="Type"
                                className={classes.textField}
                                value={this.state.type}
                                onChange={this.handleChange('type')}
                                margin="normal"
                            />
                            <br/>
                            <TextField
                                id="standard-name"
                                label="Height"
                                className={classes.textField}
                                value={this.state.height}
                                onChange={this.handleChange('height')}
                                margin="normal"
                            />
                            <TextField
                                id="standard-name"
                                label="Weight"
                                className={classes.textField}
                                value={this.state.weight}
                                onChange={this.handleChange('weight')}
                                margin="normal"
                            />
                            <TextField
                                id="standard-name"
                                label="Gender"
                                className={classes.textField}
                                value={this.state.gender}
                                onChange={this.handleChange('gender')}
                                margin="normal"
                            />
                            <br/>
                            <TextField
                                id="standard-name"
                                label="Catch Rate"
                                className={classes.textField}
                                value={this.state.catchRate}
                                onChange={this.handleChange('catchRate')}
                                margin="normal"
                            />
                            <br/>
                            <br/>
                            <Button variant="contained" 
                            color="primary" 
                            className={classes.button}
                            onClick={this.handleSubmit}>
                                Add Pokemon
                            </Button>
                            <br/>
                            <br/>
                        </Paper>
                    </form>
                }
            </div>    
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(AddPokemon));