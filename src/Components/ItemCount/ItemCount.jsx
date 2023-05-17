import { useCount } from "../../customHooks/useCount"

export const ItemCount = ({initial=0, stock, min, onAdd, buttonMessage}) => {

    const {count, increment, decrement} = useCount(initial, stock, min)

    const handleOnAdd = () => {
        onAdd(count) 
    }

    return (
        <>
        <center className='d-flex'>
            <button onClick={decrement}>-</button>
            <h3>{count}</h3>
            <button onClick={increment}>+</button>
        </center>
        <center className="d-flex">
            <button onClick={handleOnAdd}>{buttonMessage}</button>
        </center>
        </>
    )
}

