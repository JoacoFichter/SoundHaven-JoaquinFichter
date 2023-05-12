import { useEffect, useState } from "react"
import { fetchProducts } from "../../utils/mockFetch"
import ItemList from "../ItemList/ItemList"
import { ItemCount } from "../ItemCount/ItemCount"
import { useParams } from "react-router-dom"

export const ItemListContainer = ( {greeting} ) => {
    const [products, setProducts] = useState([])
    const {categoryId, brandId} = useParams()

    useEffect(() => { 
        if (categoryId) {
            fetchProducts()
                .then(res => setProducts(res.filter(prod => prod.category == categoryId)))
                .catch(err => console.log(err))
        } else if (brandId) {
            fetchProducts()
                .then(res => setProducts(res.filter(prod => prod.brand == brandId)))
                .catch(err => console.log(err))
        } else {
            fetchProducts()
                .then(res => setProducts(res))
                .catch(err => console.log(err))
        }
    },[categoryId,brandId])

    return (
        <div>
            <h1 className="m-3">{greeting}</h1>
            <h4 className="m-3">Take a look at our products!</h4>
            {categoryId ? <h3>{categoryId}</h3> : null}
            {brandId ? <h3>{brandId}</h3> : null}
            <ItemList products={products}/>
        </div>
    )
} 