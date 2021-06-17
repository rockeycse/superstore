import Hello from '../components/views/Hello'
import Test from '../components/views/Test'
import Inventory from '../components/views/Inventory'

export const routes = [{
        path: '/',
        component: Inventory,
        name: 'inventory'
    },
    {
        path: '/test/:id',
        component: Test,
        name: 'test'
    },
    {
        path: '/home',
        component: Hello,
        name: 'home'
    }

];