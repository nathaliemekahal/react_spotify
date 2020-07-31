export default function (state = {}, action) {
  switch (action.type) {
    case "SONG_ID":
      return {
        ...state,
        songId: state.songId.concat(action.payload),
      };

    default:
      return state;
  }
}
