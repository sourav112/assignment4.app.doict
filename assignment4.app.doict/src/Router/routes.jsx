import { createBrowserRouter } from "react-router-dom";
import CommonLayout from "../Layout/CommonLayout";
import Homepage from "../Pages/Homepage";
import Productpage from "../Pages/Productpage";
import ProductDetailPage from "../Pages/ProductDetailPage";
import Loginpage from "../Pages/Loginpage";
import Registrationpage from "../Pages/Registrationpage";

const router=createBrowserRouter([
    {
        path:`/`,
        element:<CommonLayout/>,
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
                element:<ProductDetailPage/>,
                loader:({params})=>
                    fetch(`http://localhost:5000/course/${params.id}`),
                
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