"use client"
import { useEffect, useState } from "react";

/*  HIT LIST FOR THE DETAILS PAGE

- add DELETE functioning to this page
*/

export default function detailsPage() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch() //fetch products to populate useState
            .then(res => res.json())
            .then(setProducts);
    }, []);

    const handleDelete = async (id) => {
        const res = await fetch(`endpoint?id=${id}`, { method: 'DELETE' });
        const updated = await res.json();
        setProducts(updated);
    };

    return (
        <div>
        <h1>details page</h1>
            {/* <li key={p._id}>
                <strong>{p.name}</strong> - ${p.price}
                <button onClick={() => handleDelete(p._id)}>Delete</button>
            </li> */}
        </div>
    )
}