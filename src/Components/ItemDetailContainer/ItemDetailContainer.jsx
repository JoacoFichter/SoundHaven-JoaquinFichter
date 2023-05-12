import { useEffect, useState } from "react"
import { ItemCount } from "../ItemCount/ItemCount"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { fetchProducts } from "../../utils/mockFetch"


export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {productId}= useParams()
    
    useEffect(() => {
        fetchProducts(productId)
            .then(product => setProduct(product))
    }, [])

    return (
        <div>
            <ItemDetail product={product} />
        </div>
    )
} 