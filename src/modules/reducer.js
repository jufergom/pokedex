import ACTIONS from "./action";
import _ from "lodash";

const defaultState = {
  items: [
    {id: 0, image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png', 
    name: 'Charmander', type: 'Fire', catchRate: 0.2},
    {id: 1, image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png', 
    name: 'Pikachu', type: 'Electric', catchRate: 0.5},
    {id: 2, image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png', 
    name: 'Caterpie', type: 'Bug', catchRate: 0.3},
    {id: 3, image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png', 
    name: 'Rattata', type: 'Normal', catchRate: 1},
    {id: 4, image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png', 
    name: 'Pidgey', type: 'Flying', catchRate: 100},
  ]
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.CREATE_ITEM: {
      console.log(action.payload);
      let item = action.payload;
      let newItem = { id: state.items.length + 1, image: item.image,
      name: item.name, type: item.type, catchRate: item.catchRate };
      let newState = _.cloneDeep(state);
      newState.items.push(newItem);
      return newState;
    }

    case ACTIONS.Types.DELETE_ITEM: {
      let newState = _.cloneDeep(state);
      console.log(action.payload);
      let index = _.findIndex(newState.items, { id: action.payload });
      newState.items.splice(index, 1);
      return newState;
    }

    default:
      return state;
  }
};

export default todoReducer;