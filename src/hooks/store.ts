/*Custom hook para el type de reducer */

import { AppDispatch, RootState } from "../store";

import { useDispatch, useSelector } from "react-redux";

import type { TypedUseSelectorHook } from "react-redux";


/* This line of code is exporting a custom hook called `useAppSelector` that is used to select and
access the state from the Redux store. It is assigning the `useSelector` function from the
`react-redux` library to the `useAppSelector` hook. The `TypedUseSelectorHook<RootState>` is a type
annotation that specifies the type of the state that will be selected using this hook. In this case,
it is `RootState`, which represents the root state of the Redux store. */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

/* The line `export const useAppDispatch : () => AppDispatch = useDispatch;` is exporting a custom hook
called `useAppDispatch`. This hook is used to access the dispatch function from the Redux store. */
export const useAppDispatch: () => AppDispatch = useDispatch;

/*
*@useAppSelector Hook es para no tener q especificar el tipo de dato , ademas para no tener q hacer uso
de useSelector y especificar cada que se llama el tipo de dato del store , usamos una funcion que se llama TypedUseSelectorHook<> para retornar de que tipo es el state del store 
y dentro de <RootState> estan los estados del store
*/

