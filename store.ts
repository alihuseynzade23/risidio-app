import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { nftReducer } from "./features/nfts-slice";

export const store = configureStore({
    reducer: {
        nft: nftReducer
    },
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;