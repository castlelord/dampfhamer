ReactDOM.render(
  <button >Start</button>
  ,
  document.getElementById('root')
);

function reducer(state, action) {
  switch (action.type) {
    case 'Increment':
      return state + 1;
      break;

    case 'Decrement':
      return state - 1;
      break;

    default:
      return state;
  }
}

var { createStore } = Redux;
var store = createStore(reducer);
