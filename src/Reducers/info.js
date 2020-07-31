export default function (state = {}, action) {
  switch (action.type) {
    case "GET_INFO_LIST":
      return {
        ...state,
        infolist: state.infolist.concat(action.payload),
      };

    default:
      return state;
  }
}
