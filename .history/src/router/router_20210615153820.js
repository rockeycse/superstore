import Hello from '.../components/view/Hello'
import Test from '.../components/view/Test'
import Inventory from '.../components/views/Inventory'

export const routes = [{
        path: '/',
        component: Hello,
        name: 'hello'
    },
    {
        path: '/test/:id',
        component: Test,
        name: 'test'
    }

];