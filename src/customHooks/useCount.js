import { useState } from "react";

export const useCount = (initial, stock, min=1) => {
    const [count, setCount] = useState(initial)    
    if (initial > stock || initial < min) initial = min

    const increment = () => {
        if (count < stock) setCount(count + 1)
    }
    
    const decrement = () => {
        if (count > min) setCount(count - 1)
    }

    return {count, increment, decrement}
}