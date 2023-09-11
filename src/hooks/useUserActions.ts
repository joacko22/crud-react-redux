import { UserId, addNewUser, deleteUserById } from "../store/users/slice";
import { useAppDispatch } from "../hooks/store";

export const useUserActions = () =>{

    const dispatch = useAppDispatch();

    const removeUser = (id:UserId) => {
        dispatch(deleteUserById(id));

    }
    const addUser=({name, email,github}) => {
        dispatch(addNewUser({name, email, github}))
    }

    return { addUser,removeUser }
}