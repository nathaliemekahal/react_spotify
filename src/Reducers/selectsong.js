export default function (state = {}, action) {
  switch (action.type) {
    case "SONG_ID":
      return {
        ...state,
        songId: action.payload,
      };
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.concat(action.payload),
      };
    case "REMOVE_FROM_FAVORITES":
      const songToRemove = state.favorites.findIndex(
        (song) => song === action.payload
      );
      console.log("INDEX", songToRemove);
      return {
        ...state,

        favorites: [
          ...state.favorites.slice(0, songToRemove),
          ...state.favorites.slice(songToRemove + 1),
        ],
      };
    // console.log("ID", action.payload);
    // const filteredArray = state.favorites.filter(
    //   (song) => song !== action.payload
    // );
    // console.log("FILTEREDARRAY", filteredArray);
    // return {
    //   ...state,
    //   selectedSong: {
    //     ...state.selectedSong,
    //     favorites: filteredArray,
    //   },
    // };

    default:
      return state;
  }
}
