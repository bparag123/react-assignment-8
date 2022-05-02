import { createSlice } from "@reduxjs/toolkit"

const initialData = {
    user: {
        name: "",
        email: "",
        password: "",
        photo: "",
        phoneNumber: ""
    }
}

const userSlice = createSlice({
    name: "user",
    initialState: initialData,
    reducers: {
        addUser(state, action) {
            console.log("modifying State");
            state.user = action.payload
        },
        logout(state, action) {
            state.user = initialData.user
        }
    }
});

export default userSlice
