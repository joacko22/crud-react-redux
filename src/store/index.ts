import { configureStore, type Middleware } from '@reduxjs/toolkit'
import userReducer from './users/slice'
import { toast } from 'sonner';

/**
 * El Middleware devuelve varias funciones 
 * store return next y next return action
 * se anidan las funciones porque la ejecucion se estan pasando en momentos distintos
 * el Middleware Nos permite validar las acciones o enviar peticiones asincronas o hacer cualq cosa antes de actualizar los estados
 */
const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
    // console.log(store.getState());// estado principal
    // console.log(action);
    next(action)//accion q se ejecuta
    // console.log(store.getState());//estado actualizado
    const { type, payload } = action

    localStorage.setItem("__redux_state__", JSON.stringify(store.getState()));

    if (type === 'users/deleteUserById') {
        toast.success(`Usuario Eliminado Con Exito`)
    }
    else if (type === 'users/addNewUser') {
        toast.success(`Usuario ${payload.name} Guardado con Exito `)
    }


}
//Middleware for Database
const syncWithDatabaseMiddleware: Middleware = (store) => (next) => (action) => {
    //fase 1
    console.log({ action, state: store.getState() });
    next(action)
    //fase 2

}
/*Aqui se guarda los estados globales de la App */
export const store = configureStore({
    reducer: {
        users: userReducer,
    },
    middleware: [persistanceLocalStorageMiddleware, syncWithDatabaseMiddleware]
})
/*
<typeof store.getState> = el tipo de  function  
ReturnType = es para que nos retorne el typo de funcion del state 
*/
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


