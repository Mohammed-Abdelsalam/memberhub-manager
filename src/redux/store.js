import { configureStore } from "@reduxjs/toolkit";

import memberReducer from "./memberReducer";

export const store = configureStore({
  reducer: {
    members: memberReducer,
  },
});
