import { createContext,useContext,useState } from "react";

export const TimingContext = createContext();

export const TimingProvider = ({children}) => {

    let [response , setResponse] = useState(null);

    let [timings, setTimings] = useState("00:00");

    let [school,setSchool] = useState(1);

    let [method,setMethod] = useState(1);


    return(
        <TimingContext.Provider value={{timings,setTimings,response,setResponse,school,setSchool,method,setMethod}}>
            {children}
        </TimingContext.Provider>
    );
};

export const useTimingContext =  () => useContext(TimingContext);