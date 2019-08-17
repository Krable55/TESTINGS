export const actionCreators = {
  INCREMENT_HOME: "INCREMENT_HOME"
};

export const INCREMENT_HOME_ACTION = "INCREMENT_HOME_ACTION";
export const INCREMENT_HOME = () => ({
  type: "INCREMENT_HOME"
});

const defaultState = {
  home: 0,
  gamepad: 0,
  context: 0
};

export default function ContextMenuReducer(state = defaultState, action) {
  switch (action.type) {
    case "INCREMENT_HOME_ACTION":
      return { ...state, home: state };
    case "INCREMENT_HOME":
      return { ...state, home: state.home + 1 };
    case "DECREMENT_HOME":
      return { ...state, home: state.home - 1 };
    default:
      return state;
  }
}
