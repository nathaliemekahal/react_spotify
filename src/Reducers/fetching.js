export default function (state = {}, action) {
  switch (action.type) {
    case "IS_LOADING":
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
