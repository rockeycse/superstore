import ItemDetails from '../components/views/ItemDetails'
import Test from '../components/views/Test'
import Inventory from '../components/views/Inventory'

export const routes = [{
        path: '/',
        component: Inventory,
        name: 'inventory'
    },
    {
        path: '/itemDetails/:id',
        component: ItemDetails,
        name: 'ItemDetails'
    },
    {
        path: '/home',
        component: Hello,
        name: 'home'
    }

];