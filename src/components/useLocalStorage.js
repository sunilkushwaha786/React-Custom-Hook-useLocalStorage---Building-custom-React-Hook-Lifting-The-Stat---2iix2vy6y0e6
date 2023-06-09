import { useEffect } from "react";
import { useState } from "react";

const useLocalStorage = (stateVar, value) => {
    const [count, setcount] = useState(value);
    updateStorage(stateVar, count);
    return [count, setcount];
};

const updateStorage =(key, val)=>{
    localStorage.setItem(key, val);
}

export default useLocalStorage;
