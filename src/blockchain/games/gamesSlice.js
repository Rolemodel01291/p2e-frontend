import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import {
  fetchColumns,
  fetchRows,
  fetchDetails,
  fetchNewItems,
} from "./gamesAPI";

export const fetchGameDetailAsync = createAsyncThunk(
  "games/fetchColumns",
  async () => {
    // const response = fetchColumns();
    // // The value we return becomes the `fulfilled` action payload
    // return response;
  }
);

export function fetchGamesAsync() {
    return async (dispatch) => {
    //   dispatch(gameSlice.actions.startLoading());
      try {
        const response = await fetchColumns();
        dispatch(gameSlice.actions.fetchColumnsAsync(response));
      } catch (error) {
        console.log(error);
      }
    };
}


  //isNew Items
export function fetchNewGameAsync() {
    return async (dispatch) => {
        try{
            const response = await fetchNewItems();
            console.log("--------------", response);
            dispatch(gameSlice.actions.fetchNewGameItems(response));
        } catch (error) {
            console.log(error);
        }
    }
}
    

export const fetchGamesRowsAsync = createAsyncThunk(
  "games/fetchRows",
  async () => {
    const response = await fetchRows();
    // The value we return becomes the `fulfilled` action payload
    console.log("------------", response);
    return response;
  }
);

const initialState = {
    rows: [],
    columns : []
}

const gameSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        fetchColumnsAsync(state, action) {
            state.columns = action.payload;
        },    
        fetchNewGameItems(state, action){
            state.rows = action.payload;
        }
    },
    extraReducers: {
        [fetchGamesRowsAsync.fulfilled]: (state, action) => {
            state.rows = action.payload;
        },
       
    },
})

export default gameSlice.reducer;

