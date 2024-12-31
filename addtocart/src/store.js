import { configureStore } from "@reduxjs/toolkit";
import { cartreducer } from "./redux/reducers/reducer";

const store = configureStore({
    reducer: {
        reducer: cartreducer
    }
});

export default store;