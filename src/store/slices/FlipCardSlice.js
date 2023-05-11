import { createSlice } from "@reduxjs/toolkit";

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

const initialState = {
    boardCards: shuffleArray([...Array(8).keys()].concat([...Array(8).keys()])),
    boardFlippedStates: Array(16).fill(false),
    boardVisibilityStates: Array(16).fill(true),
    isFirstPlayerTurn: true,
    firstPlayerScore: 0,
    secondPlayerScore: 0,
    recentWinners: []
}

const flipCardSlice = createSlice({
    name: 'flipCard',
    initialState,
    reducers: {
        flipCard(state, action){
            var indices = state.boardFlippedStates.map((e, i) => e ? i : '').filter(String)
            switch (indices.length){
                case 0:
                    state.boardFlippedStates[action.payload] = !state.boardFlippedStates[action.payload];
                    break;
                case 1: 
                    state.boardFlippedStates[action.payload] = !state.boardFlippedStates[action.payload];
                    const firstCardIdx = indices[0];
                    const secondCardIdx = action.payload;
                    if (firstCardIdx !== secondCardIdx && state.boardCards[firstCardIdx] === state.boardCards[secondCardIdx]) {
                        state.recentWinners = [firstCardIdx, secondCardIdx];
                        state.isFirstPlayerTurn ? state.firstPlayerScore += 1 : state.secondPlayerScore += 1
                    }
                    break;
                default: 
                    if (state.recentWinners.length > 0){
                        state.boardVisibilityStates[state.recentWinners[0]] = false;
                        state.boardVisibilityStates[state.recentWinners[1]] = false;
                        state.recentWinners = [];
                    }

                    state.boardFlippedStates = Array(16).fill(false);
                    state.isFirstPlayerTurn = !state.isFirstPlayerTurn;
                    break;


            }            
        },

        resetBoard(state){
            Object.assign(state, initialState);
            state.boardCards = shuffleArray([...Array(8).keys()].concat([...Array(8).keys()]));
        }
    },

});

export const {flipCard, resetBoard} = flipCardSlice.actions;

export default flipCardSlice.reducer;
