import { Link } from "react-router-dom"
import { instrumentsImgs } from "../../utils/images"
import './Item.css'

const Item = ({product}) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={instrumentsImgs[product.imgSrc]} className="card-img-top w-100" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">${product.price}</li>
                </ul>
                <div className="card-footer">
                    <Link to={`/detail/${product.id}`}>Details</Link>
                </div>
            </div>
        </div>
    )
}

export default Item