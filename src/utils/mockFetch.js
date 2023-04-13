import { instrumentsImgs } from "./images"

export const products = [
    {id: 1, name: 'Electric guitar', category:'Chordophones', brand:'FirstBrand', imgSrc: 'guitar', price: 300, stock: 45},
    {id: 2, name: 'Cello', category:'Chordophones', brand:'SecondBrand', imgSrc: 'cello', price: 400, stock: 62},
    {id: 3, name: 'Violin', category:'Chordophones', brand:'ThirdBrand', imgSrc: 'violin', price: 550, stock: 31},
    {id: 4, name: 'Saxophone', category:'Aerophones', brand:'FourthBrand', imgSrc: 'saxophone', price: 200, stock: 29},
]

export const fetchProducts = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(id ? products.find(product => product.id == id) : products) 
        },2000)
    })    
}
