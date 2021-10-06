import Home from "@/components/Home";
import Cart from "@/components/Cart";
import FoodDetails from "@/components/FoodDetails";

export default [ {
    path:'/',
    component:Home
},
    {
        path:'/food-details',
        name:'food-details',
        component:FoodDetails
    },
    {
        path:'/cart',
        component:Cart
    }
]