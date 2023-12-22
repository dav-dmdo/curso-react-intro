import { useState } from "react";

export function useLocalStorage(itemName, initialValue) {
    
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem = initialValue;

    if (!localStorageItem){
        localStorage.setItem(itemName, initialValue);
    }else{
        parsedItem = JSON.parse(localStorageItem);
    }

    const [item, setItem ] = useState(parsedItem);

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    }

    return [item, saveItem];
}

