import ItemDetails from '../components/views/ItemDetails'
import Test from '../components/views/Test'
import Inventory from '../components/views/Inventory'

export const routes = [{
        path: '/',
        component: Inventory,
        name: 'inventory'
    },
    {
        path: '/test/:id',
        component: ItemDetails,
        name: 'test'
    },
    {
        path: '/home',
        component: Hello,
        name: 'home'
    }

];