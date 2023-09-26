import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Home/Donation/Donation";
import Statistics from "../pages/Home/Statistics/Statistics";

const myCreatedRoute = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout></MainLayout>,
        children : [
            {
                path : "/",
                element : <Home></Home>             
            },
            {
                path : "/donation",
                element : <Donation></Donation>
            },
            {
                path : "/statistics",
                element : <Statistics></Statistics>
            }
        ]
    }
])

export default myCreatedRoute;