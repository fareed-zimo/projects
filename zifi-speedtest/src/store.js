import { configureStore } from "@reduxjs/toolkit";
import metadataSlice from "./features/metadataSlice";
import themeSlice from "./features/themeSlice";
import bgSlice from "./features/bgSlice";

export const store = configureStore({
  reducer: { metadata: metadataSlice, theme: themeSlice, background: bgSlice },
});
