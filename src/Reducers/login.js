export default function (state = {}, action) {
  switch (action.type) {
    case "LOG_IN":
      console.log("PAYLOAD", action.payload);
      return {
        ...state,

        user: action.payload,
      };
    default:
      return state;
  }
}
