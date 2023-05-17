import Item from "../Item/Item"

const ItemList = ({products}) => {

    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center"
        }}>
            {products.length == 0 
                ? 
                    'Cargando...' 
                :            
                    products.map((product) => {
                        return (
                            <Item key={product.id} product={product} />
                        )
                    })
            }
        </div>
    )
}

export default ItemList