import { createContext, useState, useContext, useEffect, useReducer } from "react";
import axios from "axios";


const ContextGlobal = createContext()

const Reducer = (state, action) => {
    switch (action.type){
        case 'GET_DENTIST':
            return {...state, dentist: action.payload}
        case 'ADD_FAV':
            return {...state, favs:[...state.favs, action.payload]}
        case 'TOGGLE_THEME':
            return {...state, theme: action.payload }
        default: 
            throw new Error()
    }
}

const localState = JSON.parse(localStorage.getItem('favs'))
const initialFavState = localState ? localState : []

const initialState = {
    dentist: [],
    favs: initialFavState,
    theme: 'light',
}

const ContextProvider = ({ children }) => {
    //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

    const [state, dispatch] = useReducer(Reducer, initialState)
    const [favs, setFavs] = useState([])
    const [dentist, setDentist] = useState([])
    const url = 'https://jsonplaceholder.typicode.com/users'

    
    useEffect(() => {
        axios.get(url)
            .then(response => {
                console.log(response.data)
                dispatch({type: 'GET_DENTIST' , payload: response.data})
            })
            .catch(error => {
                console.error('Error: ', error)
            })
    }, [])

    useEffect(() => {
            localStorage.setItem('favs', JSON.stringify(state.favs));
    }, [state.favs])

    const toggleTheme = () => {
        const newTheme = state.theme === 'light' ? 'dark' : 'light'
        dispatch({ type: 'TOGGLE_THEME', payload: newTheme })
    }


    return (
        <ContextGlobal.Provider value={{ dispatch, state, favs, setFavs, dentist, toggleTheme }}>
            {children}
        </ContextGlobal.Provider>
    );
};

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal)