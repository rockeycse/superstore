import Hello from '../components/views/Hello'
import Test from '../components/views/Test'
import Inventory from '../components/views/Inventory'

export const routes = [{
        path: '/',
        component: Hello,
        name: 'inventory'
    },
    {
        path: '/test/:id',
        component: Test,
        name: 'test'
    },
    {
        path: '/home',
        component: Inventory,
        name: 'inventory'
    }

];