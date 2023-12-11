import { createSlice } from "@reduxjs/toolkit";
import { getLanguages, translateText } from "./translateActions";

const initialState = {
  isLangsLoading: false,
  isLangsError: false,
  languages: [],
  isTranslateLoading: false,
  isTraslateError: false,
  translatedText: "",
};

export const translateSlice = createSlice({
  name: "translate",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getLanguages.pending, (state) => {
      state.isLangsLoading = true;
    });
    builder.addCase(getLanguages.fulfilled, (state, action) => {
      state.isLangsLoading = false;
      state.isLangsError = false;
      state.languages = action.payload;
    });
    builder.addCase(getLanguages.rejected, (state) => {
      state.isLangsLoading = false;
      state.isLangsError = true;
    });
    builder.addCase(translateText.pending, (state) => {
      state.isTranslateLoading = true;
    });
    builder.addCase(translateText.fulfilled, (state, action) => {
      state.isTranslateLoading = false;
      state.translatedText = action.payload;
      state.isTraslateError = false;
    });
    builder.addCase(translateText.rejected, (state) => {
      state.isTraslateError = true;
      state.isTranslateLoading = false;
    });
  },
  reducers: {
    setTranslated: (state, action) => {
      state.translatedText = action.payload;
    },
  },
});

export const { setTranslated } = translateSlice.actions;
