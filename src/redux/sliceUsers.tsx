import { createSlice } from "@reduxjs/toolkit";

interface users {
  name: string;
}

const sliceUsers = createSlice({
  name: "users",
});
