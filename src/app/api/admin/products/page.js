"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import dbTemp from '../../../../../utils/dbTemp'
// console.log(`Temp db: `, dbTemp)

// function to handle admin products functionality (CRUD)
export default function AdminProducts() {
    const router = useRouter();
    const [ products, setProducts ] = useState([]);
    const [ form, setForm ] = useState({ name: '', price: '', category: '', description: '' });
    const [ editingId, setEditingId ] = useState(null);
    const [ search, setSearch ] = useState('');
    const [ page, setPage ] = useState(1);
    const [ limit ] = useState(5);
    const [ total, setTotal ] = useState(0);

    //  CHECK LOCALSTORAGE FOR A TOKEN
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

    // useEffect to load db in useState
    useEffect(() => {
        if (!token) return; // reconfigure when time to implement token security
        const productList = Object.values(dbTemp.products)
        setProducts(productList)
    }, [token, page, search])

    useEffect(() => {
        console.log(`product list: `, products)
    }, [products])



    return <div>
        <h1>
            Products Manage Component
        </h1>

        {/* dbProductsDisplay function */}
        <fieldset
        className="product-display-container">
            <legend>DB Products</legend>
            {Array.isArray(products) && products.map(p => (
                <div 
                key={p._id}
                className="product-display-content">
                    <h2>{p.name}</h2>
                    <p>{p.description}</p>
                    <p>${p.price}</p>
                </div>
            ))}
        </fieldset>

    </div>
}