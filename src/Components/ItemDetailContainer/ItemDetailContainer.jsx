import { useEffect, useState } from "react"
import { ItemCount } from "../ItemCount/ItemCount"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { fetchProducts } from "../../utils/mockFetch"
import { doc, getDoc, getFirestore } from "firebase/firestore"


export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {productId}= useParams()
    
    useEffect(() => {
        const db = getFirestore()
        const queryDoc = doc(db, 'products', productId)

        getDoc(queryDoc)
            .then(res => setProduct({id: res.id, ...res.data()}))
    }, [])

    return (
        <div>
            <ItemDetail product={product} />
        </div>
    )
} 