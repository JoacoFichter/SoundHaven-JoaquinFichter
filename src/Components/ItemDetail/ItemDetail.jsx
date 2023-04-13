import { useEffect, useState } from "react"
import { instrumentsImgs } from "../../utils/images"
import { ItemCount } from "../ItemCount/ItemCount"

export const ItemDetail = ({product}) => {

    const onAdd = (count) => {
        if (count != 0) console.log(count + ' Added to the cart')
    }

    return (
        <div className="row">
            {product.imgSrc ? 
                <>
                <div className="col-6">
                    <img src={instrumentsImgs[product.imgSrc]} alt={product.name} width={250}/> 
                    <h1>{product.name}</h1>
                    <p>Category: {product.category}</p>
                    <p>Price: {product.price}</p>
                </div>
                <div className="col-6">
                    <ItemCount initial={1} stock={product.stock} min={0} onAdd={onAdd}/>
                </div>
                </>
            : <h1>Cargando...</h1>
            }
        </div>
                
                
    )
}