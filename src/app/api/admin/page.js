
// admin folder components
import Logs from './logs/page';
import Payments from './payments/page';
import AdminProducts from './products/page';

// server-side temp database for products
import products from '../../../../utils/dbTemp';


// Admin Home Page
export default function adminDashboard() {
    // console.log(products)
    return <div>
        <h1>
            Admin Dashboard Page
        </h1>
        <div>
            <h1>
                Admin Dashboard Components:
            </h1>
            <Logs />
            <Payments />
            <AdminProducts />
            
        </div>
    </div>
}