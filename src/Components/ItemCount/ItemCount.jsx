import { useCount } from "../../customHooks/useCount"

export const ItemCount = ({initial=0, stock, min, onAdd, buttonMessage}) => {

    const {count, increment, decrement} = useCount(initial, stock, min)

    const handleOnAdd = () => {
        onAdd(count) 
    }

    return (
        <div className='d-flex'>
            <button onClick={decrement}>-</button>
            <h3>{count}</h3>
            <button onClick={increment}>+</button>
            <button onClick={handleOnAdd}>{buttonMessage}</button>
        </div>
    )
}

