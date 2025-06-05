import { BUGGER_ORDER } from "./BuggerTypes";

const initialState = {
  buggerCount: 2000,
}

// reducer
const buggerReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUGGER_ORDER:
      return {
        ...state,
        buggerCount: state.buggerCount - 1
      }
    default:
      return state;
  }
}

export default buggerReducer;
