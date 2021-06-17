import Hello from '../components/views/Hello'
import Test from '../components/views/Test'
import Inventory from '../components/views/Inventory'

export const routes = [{
        path: '/',
        component: Hello,
        name: 'hello'
    },
    {
        path: '/test/:id',
        component: Test,
        name: 'test'
    },
    {
        path: '/Inventory/:id',
        component: Inventory,
        name: 'Inventory'
    }

];