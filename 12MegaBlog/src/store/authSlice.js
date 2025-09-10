import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null,
    profilePhoto: "hii",
    // likedpost: [],
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        },
        userPhoto: (state, action) => {
            // console.log("Updating Redux Profile Photo:", action.payload);
            state.profilePhoto = action.payload;
        },
        // userLike: (state, action) => {
        //     console.log("userlike slice workig")
        //     state.likedpost.push(action.payload);
        // }

    }
});


export const { login, logout, userPhoto, /*userLike*/ } = authSlice.actions;

export default authSlice.reducer;
