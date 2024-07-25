import { createStore } from 'redux';

const initialState = {
  navArray:
  [
    {
      title: 'intro',
      link: '#intro',
    },
    {
      title: 'skill',
      link: '#skill',
    },
    {
      title: 'site',
      link: '#site',
    },
    {
      title: 'portfolio',
      link: '#port',
    },
    {
      title: 'contact',
      link: '#contact',
    },
  ]
};

const rootReducer = (state = initialState, action) => {
  // console.log(state, action);
  switch (action.type) {
    // case 'INCREMENT':
    //   return {
    //     ...state,
    //     number: state.number + action.size
    //   };
    default:
      return state;
  }
};

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;