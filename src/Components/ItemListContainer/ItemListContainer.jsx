import { useEffect, useState } from "react"
import { fetchProducts } from "../../utils/mockFetch"
import ItemList from "../ItemList/ItemList"
import { ItemCount } from "../ItemCount/ItemCount"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore } from "firebase/firestore"

export const ItemListContainer = ( {greeting} ) => {
    const [products, setProducts] = useState([])
    const {categoryId, brandId} = useParams()

    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db, 'products')

        getDocs(queryCollection)
            .then(res=>{
                let productsArray = res.docs.map(product => ({id: product.id, ...product.data()}))
                if(categoryId){setProducts(productsArray.filter(prod => prod.category == categoryId))
                }else if(brandId){setProducts(productsArray.filter(prod => prod.brand == brandId))
                }else {
                    setProducts(productsArray)
                }                
            })
            .catch(err => console.log(err))
    }, [categoryId, brandId])

    console.log(products)
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