"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import dbTemp from '../../../../../utils/dbTemp'
// console.log(`Temp db: `, dbTemp)

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

    // useEffect: if no token redirect to login page otherwise fetch products with pagination
    useEffect(() => {
        if (!token) router.push('/api/auth/login');
        else fetchProducts();
    }, [page, search]);

    // setProducts with db information
    const fetchProducts = async () => {
        // const res = await fetch(`/api/admin/products?page=${page}&limit=${limit}&search=${search}`, {
        //     headers: { Authorization: `Bearer ${token}`},
        // });
        // const data = await res.json();
        // console.log(`res.json(): `, data )
        const dbProducts = dbTemp
        console.log(`dbProducts: `,dbProducts )
        // setProducts(data.items);
        setProducts(dbProducts);
        // setTotal(data.total);
    }

    return <div>
        <h1>
            Products Manage Component
        </h1>

        <fieldset
        className="product-display-container">
            <legend>DB Products</legend>
            {products.map(p => (
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