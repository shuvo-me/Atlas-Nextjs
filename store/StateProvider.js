import { createContext, useReducer, useContext } from 'react';

const StateContext = createContext();

export default function StateProvider({initialState,reducer,children}){
    return (
        <StateContext.Provider value={useReducer(reducer,initialState)}>
            {children}
        </StateContext.Provider>
    )
};

export const useStateValue = () => useContext(StateContext);
