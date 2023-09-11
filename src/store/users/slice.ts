import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";


const DEFAULT_STATE = 
[
    {
        id: "1",
        name: "Peter Doe",
        email: "peterdiem@gmail.com",
        github: "peterdigraf",

    },
    {
        id: "2",
        name: "John Doe",
        email: "john@gmail.com",
        github: "john",
    },
    {
        id: "3",
        name: "Marc",
        email: "Marc@gmail.com",
        github: "marcgill",
    }
];

export interface User {
    name: string;
    email: string;
    github: string;
} 
export type UserId = string;

export interface UserWithId extends User {
    id: UserId;
}
const initialState: UserWithId[] = (() =>{

    const persistedState = localStorage.getItem("__redux_state__")//trae el estado del localStorage
    if (persistedState) {
        return JSON.parse(persistedState).users; //si existe lo va a retornar en el initialState
    }
    return DEFAULT_STATE; //Sino pone el default
}) ();

export const userSlice = createSlice({
    name: 'users',
    /* `initialState` is a variable that holds the initial state for the `users` slice of the Redux
    store. In this case, it is an array of `UserWithId` objects. Each `UserWithId` object represents
    a user and has properties like `id`, `name`, `email`, and `github`. */
     initialState,// Initial state for user with id  
    reducers: {
        addNewUser: (state,action:PayloadAction<User>)=>{
            const id = crypto.randomUUID();
            return [...state,{id ,...action.payload}]
        },
        deleteUserById: (state,action:PayloadAction<UserId>) => {
            /* The code `const id = action.payload` is extracting the `id` value from the
            `action.payload` property. The `action.payload` is the data that is passed along with
            the action when it is dispatched. */
            const id = action.payload
            return state.filter((user) => user.id !== id)
        }
    },

})

/* `export default userSlice.reducer;` is exporting the reducer function from the `userSlice` slice. */
export default userSlice.reducer; 

export const {addNewUser,deleteUserById} = userSlice.actions