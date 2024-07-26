import React,{useState,useContext,createContext} from "react";

export const CounterContext = createContext(null);

export const CounterProvider = ({children}) =>{

    let [count,setCount] = useState(0);

    function Increment(){setCount(count+1)}

    function Decrement(){
        if(count>0){
            setCount(count-1);
        }
    }

    return(
        <CounterContext.Provider value={{count,setCount,Increment,Decrement}}>
            {children}
        </CounterContext.Provider>
    );


}

export const useCounterContext =()=> useContext(CounterContext);
