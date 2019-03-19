import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  withStyles,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
  Grid,
  TextField,
  Button,
  FormControl
} from "@material-ui/core";
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ACTIONS from "./modules/action";
import { connect } from "react-redux";
import AddPokemon from "./AddPokemon"

const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0 40% 0 40%'
    },
    inline: {
      display: 'inline',
    },
    button: {
      margin: theme.spacing.unit
    }
  });

  const mapStateToProps = state => ({
    items: state.items
});

const mapDispatchToProps = dispatch => ({
  createItem: item => dispatch(ACTIONS.createItem(item)),
  deleteItem: id => dispatch(ACTIONS.deleteItem(id))
});
  

class PokemonList extends Component {
  constructor() {
    super();
    this.state = {
      addPokemon: false
    }
  }

  handleAdd = () => {
    this.setState({addPokemon: true});
  }

  generate = () => {
    return this.props.items.map(item => (
      <ListItem key={item.id} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="pokemon" src={item.image} />
        </ListItemAvatar>
        <ListItemText
          primary={item.name}
          secondary={
            <React.Fragment>
              <Typography component="span" color="textPrimary">
                {item.type}
              </Typography>
              {item.catchRate}
            </React.Fragment>
          }
        />
      </ListItem>
    ));
  };

    render() {
        const {classes} = this.props;
        return(
          <div>
            {this.state.addPokemon ?
             <AddPokemon /> :
             <div className={classes.root}>
              <List dense={false}>{this.generate()}</List>
              <Button variant="contained" 
                color="primary" 
                className={classes.button}
                onClick={this.handleAdd.bind(this)}>
                  Add Pokemon
              </Button>
             </div>
             }
          </div>
        );
    }
}

PokemonList.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(PokemonList));