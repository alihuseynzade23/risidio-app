import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface NFT {
    image: string;
}

const nftSlice = createSlice({
  name: '@@nfts',
  initialState: [] as NFT[], // Specify the type explicitly as NFT[]
  reducers: {
    setNFT: (state, action: PayloadAction<string>) => {
        state.push({ image: action.payload});
    },

  }
});

export const {setNFT} = nftSlice.actions;
export const nftReducer = nftSlice.reducer;