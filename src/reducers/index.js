import * as types from "../constants";

const initialState = {
  error: "",
  isLoading: false,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
