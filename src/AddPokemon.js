import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ACTIONS from "./modules/action";
import { connect } from "react-redux";
import PokemonList from './PokemonList';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

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
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
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
            type1: '',
            type2: '',
            height: '',
            weight: '',
            gender: '',
            catchRate: '',
            pokemon: {},
            pokemonAdded: false
        }
    }

    createPokemon = () => {
        this.setState({pokemon: {image: this.state.image, name: this.state.name, type1: this.state.type1,
        type2: this.state.type2, catchRate: this.state.catchRate}});
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
                            <br/>
                            <FormControl className={classes.formControl}>
                                <InputLabel shrink htmlFor="age-label-placeholder">
                                    Type 1
                                </InputLabel>
                                <Select
                                    value={this.state.type1}
                                    onChange={this.handleChange('type1')}
                                    inputProps={{
                                    name: 'type',
                                    id: 'type-simple',
                                    }}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value='Normal'>Normal</MenuItem>
                                    <MenuItem value='Fighting'>Fighting</MenuItem>
                                    <MenuItem value={'Flying'}>Flying</MenuItem>
                                    <MenuItem value={'Poison'}>Poison</MenuItem>
                                    <MenuItem value={'Ground'}>Ground</MenuItem>
                                    <MenuItem value={'Rock'}>Rock</MenuItem>
                                    <MenuItem value={'Bug'}>Bug</MenuItem>
                                    <MenuItem value={'Ghost'}>Ghost</MenuItem>
                                    <MenuItem value={'Steel'}>Steel</MenuItem>
                                    <MenuItem value={'Fire'}>Fire</MenuItem>
                                    <MenuItem value={'Water'}>Water</MenuItem>
                                    <MenuItem value={'Grass'}>Grass</MenuItem>
                                    <MenuItem value={'Electric'}>Electric</MenuItem>
                                    <MenuItem value={'Psychic'}>Psychic</MenuItem>
                                    <MenuItem value={'Ice'}>Ice</MenuItem>
                                    <MenuItem value={'Dragon'}>Dragon</MenuItem>
                                    <MenuItem value={'Fairy'}>Fairy</MenuItem>
                                    <MenuItem value={'Dark'}>Dark</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className={classes.formControl}>
                                <InputLabel shrink htmlFor="age-label-placeholder">
                                    Type 2
                                </InputLabel>
                                <Select
                                    value={this.state.type2}
                                    onChange={this.handleChange('type2')}
                                    inputProps={{
                                    name: 'type',
                                    id: 'type-simple',
                                    }}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value='Normal'>Normal</MenuItem>
                                    <MenuItem value='Fighting'>Fighting</MenuItem>
                                    <MenuItem value={'Flying'}>Flying</MenuItem>
                                    <MenuItem value={'Poison'}>Poison</MenuItem>
                                    <MenuItem value={'Ground'}>Ground</MenuItem>
                                    <MenuItem value={'Rock'}>Rock</MenuItem>
                                    <MenuItem value={'Bug'}>Bug</MenuItem>
                                    <MenuItem value={'Ghost'}>Ghost</MenuItem>
                                    <MenuItem value={'Steel'}>Steel</MenuItem>
                                    <MenuItem value={'Fire'}>Fire</MenuItem>
                                    <MenuItem value={'Water'}>Water</MenuItem>
                                    <MenuItem value={'Grass'}>Grass</MenuItem>
                                    <MenuItem value={'Electric'}>Electric</MenuItem>
                                    <MenuItem value={'Psychic'}>Psychic</MenuItem>
                                    <MenuItem value={'Ice'}>Ice</MenuItem>
                                    <MenuItem value={'Dragon'}>Dragon</MenuItem>
                                    <MenuItem value={'Fairy'}>Fairy</MenuItem>
                                    <MenuItem value={'Dark'}>Dark</MenuItem>
                                </Select>
                            </FormControl>
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
                            <br/>
                            <TextField
                                id="standard-name"
                                label="Catch Rate"
                                className={classes.textField}
                                value={this.state.catchRate}
                                onChange={this.handleChange('catchRate')}
                                margin="normal"
                            />
                            <FormControl className={classes.formControl}>
                                <InputLabel shrink htmlFor="gender-label-placeholder">
                                    Gender
                                </InputLabel>
                                <Select
                                    value={this.state.gender}
                                    onChange={this.handleChange('gender')}
                                    inputProps={{
                                    name: 'type',
                                    id: 'type-simple',
                                    }}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value='Male'>Male</MenuItem>
                                    <MenuItem value='Female'>Female</MenuItem>
                                </Select>
                            </FormControl>
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