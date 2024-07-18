import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ReduxColors {
  tableHeaderColor: string;
  titleColor: string;
  labelColor: string;
  tableHeaderTitleColor: string;
}

const initialState: ReduxColors = {
  tableHeaderColor: "#6b7280",
  titleColor: "#6b7280",
  labelColor: "#6b7280",
  tableHeaderTitleColor: "#fff",
};

const colorSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {
    updateColors: (
      state,
      action: PayloadAction<{ colorKey: keyof ReduxColors; value: string }>
    ) => {
      const { colorKey, value } = action.payload;
      console.log("value in redux", colorKey, value);

      if (state.hasOwnProperty(colorKey)) {
        state[colorKey] = value;
      }
    },
  },
});

export const { updateColors } = colorSlice.actions;
export default colorSlice.reducer;
