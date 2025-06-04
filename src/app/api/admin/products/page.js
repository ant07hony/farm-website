"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import dbTemp from '../../../../../utils/dbTemp'

// console.log(`Temp db: `, dbTemp)


// function to handle admin products functionality for Create and Read (CRUD)
export default function AdminProducts() {
    const router = useRouter();
    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState({ name: '', price: '', description: '', image: '' });
    const [editingId, setEditingId] = useState(null);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [limit] = useState(5);
    const [total, setTotal] = useState(0);

    //  CHECK LOCALSTORAGE FOR A TOKEN
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

    // useEffect for using token
    useEffect(() => {
        if (!token) return; // reconfigure when time to implement token security
    }, [token, page, search])

    // useEffect to load temp db in useState
    // useEffect(() => {
    //     const productList = Object.values(dbTemp.products)
    //     setProducts(productList)
    // }, [])

    // useEffect to fetch data from real db to populate useState
    /*
    */
    useEffect(() => {
        fetch('/api/admin/apiHandler')
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch');
                return res.json();
            })
            .then(data => setProducts(data))
            .catch(err => console.error('Failed to fetch products: ', err))
    }, []);

    useEffect(() => {
        console.log(`product list: `, products)
    }, [products])

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    // need to provide endpint for fetch()
    const handleAdd = async e => {
        e.preventDefault();
        const res = await fetch('/apiHandler', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...formData, price: parseFloat(formData.price) })
        });
        const updated = await res.json();
        setProducts(updated);
        setFormData({ name: '', price: '', description: '', image: '' })
    }


    return <div>
        <h1>
            Products Manage Component
        </h1>

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

        <fieldset>
            <legend>Add Product</legend>
            <form onSubmit={handleAdd}>

                <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                <input name="price" placeholder="Price" type="number" value={formData.price} onChange={handleChange} required />
                <input name="description" placeholder="Description" type="number" value={formData.description} onChange={handleChange} required />
                <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
                <button type="submit">Add Product</button>
            </form>
        </fieldset>

    </div>
}