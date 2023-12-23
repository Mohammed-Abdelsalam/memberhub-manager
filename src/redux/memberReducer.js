import { createSlice } from "@reduxjs/toolkit";

import initData from "../data/initData";

export const memberSlice = createSlice({
  name: "members",
  initialState: initData,
  reducers: {
    addMember: (state, action) => {
      state.push(action.payload);
    },
    editMember: (state, action) => {
      return state.map((member) =>
        member.id === action.payload.id ? action.payload : member
      );
    },
    deleteMember: (state, action) => {
      return state.filter((member) => member.id !== action.payload);
    },
  },
});

export const { addMember, deleteMember, editMember } = memberSlice.actions;

export default memberSlice.reducer;
