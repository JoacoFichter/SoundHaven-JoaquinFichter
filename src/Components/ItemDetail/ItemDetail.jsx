import { instrumentsImgs } from "../../utils/images"
import { ItemCount } from "../ItemCount/ItemCount"
import { useCartContext } from "../../customHooks/useCartContext"

 

export const ItemDetail = ({product}) => {
    
    const { addToCart } = useCartContext()
    
    const onAdd = (quantity) => {
        if (quantity != 0) {
            addToCart({...product, quantity})
        }        
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
                    <ItemCount initial={1} stock={product.stock} min={0} onAdd={onAdd} buttonMessage={'Add to the Cart'}/>
                </div>
                </>
            : <h1>Cargando...</h1>
            }
        </div>
                
                
    )
}