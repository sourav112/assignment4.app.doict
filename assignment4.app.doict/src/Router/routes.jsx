import { createBrowserRouter } from "react-router-dom";
import CommonLayout from "../Layout/CommonLayout";
import Homepage from "../Pages/Homepage";
import Productpage from "../Pages/Productpage";
import ProductDetailPage from "../Pages/ProductDetailPage";
import Loginpage from "../Pages/Loginpage";
import Registrationpage from "../Pages/Registrationpage";
import PrivateRoute from "./PrivateRoute";
import DisplayError from "../Pages/DisplayError";

const router=createBrowserRouter([
    {
        path:`/`,
        element:<CommonLayout/>,
        errorElement:<DisplayError/>,
        children:[
            {
                path:`/`,
                element:<Homepage/>
            },
            {
                path:`/courses`,
                element:<Productpage/>
            },
            {
                path:`/course/:id`,
                element: (
                    <PrivateRoute>
                        <ProductDetailPage/>
                    </PrivateRoute>
                ),
                loader:({params})=>
                    fetch(`https://assignment4serverdoict.vercel.app/course/${params.id}`),
                
            },
            {
                path:`/login`,
                element:<Loginpage/>
            },
            {
                path:`/registration`,
                element:<Registrationpage/>
            },

        ]
        
    }
    
]);

export default router;