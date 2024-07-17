import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface ReduxItems {
  id: string;
  name: string;
}

const initialState: any = [];

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItems: (state, action: PayloadAction<any>) => {
      const { name } = action.payload;
      state.push({ id: uuidv4(), name: name });
    },
    deleteItems: (state, action: PayloadAction<any>) => {
      const { id } = action.payload;
      return state.filter((item: ReduxItems) => item.id !== id);
    },
  },
});


export const { addItems, deleteItems } = itemsSlice.actions;
export default itemsSlice.reducer;