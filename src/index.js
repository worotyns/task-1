import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import User from './components/User'
import user from './reducers'
import getUsers from './helpers/ghUser';

const store = createStore(user)
const rootEl = document.getElementById('root')

const render = () => {
  const state = store.getState();
  return ReactDOM.render(
    <User
      value={state.value}
      datalist={state.datalist}
      onChange={(e) => {
        const value = e.currentTarget.value;
        store.dispatch({ type: 'TYPE', value });
        getUsers(value).then(list => store.dispatch({ type: 'DATALIST', list}));
      }}
    />,
    rootEl
  )

}

render()
store.subscribe(render)
