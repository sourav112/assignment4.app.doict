import { createBrowserRouter } from "react-router-dom";
import CommonLayout from "../Layout/CommonLayout";
import Homepage from "../Pages/Homepage";
import Productpage from "../Pages/Productpage";

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
            }
        ]
        
    }
    
]);

export default router;