import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

//action
export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD, //action
  payload: text, //send data, user search input
});

export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch("https://api.mocki.io/v1/ebd181fc")
    // fetch -> to make requests to the server
    .then((response) => response.json())
    .then((data) => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch((error) =>
      dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error })
    );
};
// not return an object, return a function
// redux expects actions to return objects
// by adding thunkmiddleware, when returning a function, it's going to trigger thunk, giving func the (dispatch) to use
