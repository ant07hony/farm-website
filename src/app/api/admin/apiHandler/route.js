import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server';


export async function GET() {
    const filePath = path.join(process.cwd(), 'utils', 'productsDB.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(jsonData)
    return NextResponse.json(data);
}


// export default function handler(req, res) {

//     if (req.method === 'GET') {
//         try {
//             const productDbPath = path.join(process.cwd(), 'utils', 'productsDB.json')
//             const file = fs.readFileSync(productDbPath, 'utf8');
//             const data = JSON.parse(file);
//             console.log('JSON DB: ', data);
//             res.status(200).json(data);
//         } catch (err) {
//             console.error('API error: ', err.message);
//             res.status(500).json({ error: 'Failed to load data' });
//         }
//     } else {
//         res.status(405).json({ error: 'Method Not Allowed' });
//     }


//     // if (req.method === 'POST') {
//     //     const data = readDB();
//     //     const highestId = data.reduce((max, item) => Math.max(max, Number(item._id)), 0);
//     //     const newProduct = {
//     //         ...req.body,
//     //         _id: String(highestId + 1),
//     //     };
//     //     data.push(newProduct);
//     //     writeDB(data);
//     //     return res.status(201).json(data);
//     // }

//     // if (req.method === 'DELETE') {
//     //     const { id } = req.query
//     //     const data = readDB();
//     //     const updated = data.filter(p => p._id !== id);
//     //     return res.status(200).json(updated);
//     // }

//     // res.status(404).json({ message: 'Method not allowed' });
// }