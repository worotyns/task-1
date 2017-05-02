const defaultState = {value: '', selected: '', datalist: []};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'TYPE':
      state.value = action.value;
      break;
    case 'SELECT':
      state.selected = action.selected;
      break;
    case 'DATALIST':
      state.datalist = action.list;
      break;
    default:
      break;
  }
  return state
}
