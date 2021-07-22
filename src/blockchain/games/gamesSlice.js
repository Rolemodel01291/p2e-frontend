import { createSlice } from "@reduxjs/toolkit";
import {
  fetchColumns,
  
  fetchDetails,
  fetchNewItems,
  fetchFilterGames,
  
} from "./gamesAPI";


export function fetchDetailData(id) {
  return async (dispatch) => {
    try {
      const response = await fetchDetails(id);
      dispatch(gameSlice.actions.fetchDetailedData(response));
    } catch (error) {
      console.log(error);
    }
  };
}



export function fetchGamesFilter(sortList) {
  return async (dispatch) => {
    try {
     
      dispatch(gameSlice.actions.setSortList(sortList));
      const response = await fetchFilterGames(sortList);
      dispatch(gameSlice.actions.fetchGamesRows(response));
    } catch (error) {
      
      console.log(error);
    }
  };
}

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
    try {
      const response = await fetchNewItems();
      dispatch(gameSlice.actions.fetchNewGameItems(response));
    } catch (error) {
      console.log(error);
    }
  };
}


const initialState = {
  sortList: {
    category: "All-Genre",
    platform: "All-Blockchain",
    device: "All-Device",
    status: "All-Status",
    nft: "All-NFT",
    f2p: "All-FreeToPlay",
    p2e: "All-PlayToEarn",
    page: 1,
    sort: 'total_rank',
    direction: 'asc',
    is_new : '',
    keyword : ''
  },
  total_count: 0,
  rows: [],
  columns: [],
  detail: [],
  selectedValue: ""
};

const gameSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    setSortList(state, action){
      state.sortList = action.payload;
    },
    fetchGamesRows(state, action) {
      state.rows = action.payload.rows;
      state.total_count = action.payload.total_count;
    },
    fetchColumnsAsync(state, action) {
      state.columns = action.payload;
    },
    fetchNewGameItems(state, action) {
      state.page = 1;
      state.rows = action.payload.rows;
      state.total_count = action.payload.total_count;
    },
    fetchFilteredGames(state, action) {
      state.page = 1;
      state.rows = action.payload.rows;
      state.total_count = action.payload.total_count;
    },
    fetchSortedItems(state, action) {
      state.page = 1;
      state.rows = action.payload.rows;
      state.total_count = action.payload.total_count;
    },
    fetchDetailedData(state, action) {
      state.detail = action.payload;
    },
  },
  extraReducers: {},
});

export default gameSlice.reducer;
